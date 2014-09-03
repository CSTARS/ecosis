ESIS.compare = (function() {

	var list = {};
	var data = {};
	var cdata = [];
	var initd = false;

	function init() {
		if( window.localStorage ) {
			var storedList = window.localStorage.getItem('compare-list');
			if( storedList ) {
				list = JSON.parse(storedList);
				_updateUI();
			}
		}
		initd = true;
	}

	function show() {
		if( !initd ) init();

		$('#compare-back-btn').attr('href',CERES.mqe.queryToUrlString(CERES.mqe.getCurrentQuery()));

		$('#compare-list-btns').html('loading...');

		var arr = [];
		cdata = [];
		for( var key in list ) {
			arr.push(key);
		}
		if( arr.length == 0 ) return;
		get(0, arr);
	}

	function get(index, array) {
		if( index >= array.length ) {
			ESIS.chart.drawCompare(cdata, $('#compare-chart'));

			var ul = $('<ul></ul>');
			$('#compare-list-btns').html('').append(ul);
			for( var i = 0; i < cdata.length; i++ ) {
				ul.append($(
					'<li><a href="#result/'+cdata[i]._id+'">'+cdata[i].Name+'</a> <a class="btn btn-default"><i class="icon-download-alt"></i> Download</a></li>'
				));
			}
			
		} else if ( data[array[index]] ) {
			cdata.push(data[array[index]]);
			index++;
			get(index, array);
		} else {
			$.get('/rest/get?_id='+array[index],
				function(item) {
					data[array[index]] = item;
					cdata.push(item);
					index++;
					get(index, array);
				}
			);
		}

	}

	function add(id, name) {
		list[id] = name;
		_updateStorage();
		_updateUI();
	}

	function remove(id) {
		delete list[id];
		$('.select-'+id).removeAttr('checked');
		_updateStorage();
		_updateUI();
	}

	function removeAll() {
		for( var id in list ) {
			$('.select-'+id).removeAttr('checked');
		}
		list = {};
		_updateStorage();
		_updateUI();
	}

	function _updateStorage() {
		if( window.localStorage ) {
			// update localstorage as well
			console.log(JSON.stringify(list));
			window.localStorage.setItem('compare-list', JSON.stringify(list));
		}
	}

	function _updateUI() {
		var empty = true;
		for( var k in list ) {
			empty = false;
			break;
		}

		if( empty ) {
			$('#compare-list').parent().hide();
			return;
		}
		$('#compare-list').parent().show();

		var ul = $('#compare-list').html('<li class="nav-header">Compare <a class="pull-right" href="#compare">Show</a></li><li class="divider"></li>');
		var c = 0;
		for( var id in list ) {
			var li = $('<li id="compare-list-'+id+'" style="cursor:pointer"><i class="icon-remove"></i> '+list[id]+'</li>')
						.on('click', function(){
							remove($(this).attr('id').replace(/compare-list-/,''));
						});
			ul.append(li);
			$('.select-'+id).attr('checked', 'checked');
			c++;
		}
		if( c > 1 ) {
			ul.append($('<li style="text-align:center"><a style="cursor:pointer" onclick="ESIS.compare.removeAll()">Remove All</a></li>'));
		} 
	}

	function toggle(ele) {
		ele = $(ele);
		var id = ele.attr('itemid');
		var name = ele.attr('itemname');
		if( $(ele).is(':checked') ) {
			add(id, name);
		} else {
			remove(id);
		}
	}

	function selected(id) {
		if( list[id] ) return true;
		return false;
	}

	return {
		add : add,
		remove : remove,
		removeAll : removeAll,
		toggle : toggle,
		selected : selected,
		init : init,
		show : show
	}

})();