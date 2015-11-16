## Search Server - Restart script

Don't forget to add to restart crontab
```
crontab -e
@reboot /opt/node-apps/ecosis-search/restart.sh
```
