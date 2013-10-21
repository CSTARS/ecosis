import logging

import ckan.plugins as plugins
import ckan.plugins.toolkit as tk


class EsisPlugin(plugins.SingletonPlugin,
        tk.DefaultDatasetForm):
    '''An example IDatasetForm CKAN plugin.

    Uses a tag vocabulary to add a custom metadata field to datasets.

    '''
    plugins.implements(plugins.IConfigurer, inherit=False)
    plugins.implements(plugins.IDatasetForm, inherit=False)
    plugins.implements(plugins.ITemplateHelpers, inherit=False)


    def update_config(self, config):
        # Add this plugin's templates dir to CKAN's extra_template_paths, so
        # that CKAN will use this plugin's custom templates.
        tk.add_template_directory(config, 'templates')
        # setting up Fanstatic directory.  In here you will find a resource.config file
        tk.add_resource('public','esis')

    def get_helpers(self):
        return {}

    def is_fallback(self):
        # Return True to register this plugin as the default handler for
        # package types not handled by any other IDatasetForm plugin.
        return True

    def package_types(self):
        return ['spectral']

    def _modify_package_schema(self, schema):
        return schema

    def create_package_schema(self):
        schema = super(EsisPlugin, self).create_package_schema()
        schema = self._modify_package_schema(schema)
        return schema

    def update_package_schema(self):
        schema = super(EsisPlugin, self).update_package_schema()
        schema = self._modify_package_schema(schema)
        return schema

    def show_package_schema(self):
        schema = super(EsisPlugin, self).show_package_schema()

        # Don't show vocab tags mixed in with normal 'free' tags
        # (e.g. on dataset pages, or on the search page)
        schema['tags']['__extras'].append(tk.get_converter('free_tags_only'))

        return schema


    def setup_template_variables(self, context, data_dict):
        return super(EsisPlugin, self).setup_template_variables(
                context, data_dict)

    def new_template(self):
        return super(EsisPlugin, self).new_template()

    def read_template(self):
        return super(EsisPlugin, self).read_template()

    def edit_template(self):
        return super(EsisPlugin, self).edit_template()

    def comments_template(self):
        return super(EsisPlugin, self).comments_template()

    def search_template(self):
        return super(EsisPlugin, self).search_template()

    def history_template(self):
        return super(EsisPlugin, self).history_template()

    def package_form(self):
        return super(EsisPlugin, self).package_form()

    # check_data_dict() is deprecated, this method is only here to test that
    # legacy support for the deprecated method works.
    def check_data_dict(self, data_dict, schema=None):
        return

