# CAF (Cloud Assistant Framework)

Co-design permanent, active, stateful, reliable cloud proxies with your web app.

See http://www.cafjs.com 

## CAF Extra standalone simulator

*** THIS IS OBSOLETE, THERE IS NO NEED FOR A SIMULATOR TO RUN LOCALLY**



This repository contains a CAF extra lib that simulates the Cloud Foundry http router.

The goal is to run CAF standalone, in a single node without CF, for the purpose of debugging.

See http:/www.cafjs.com/standalone.html 

## API

    start.js 4000 localhost 3000
    
where 4000 is the new local port, localhost is where your CAF server will run, and 3000 is the port that this server is listening to (defaults to 3000 but it can be changed in `framework.json` as follows:

    {
        "module": "plug_cloudfoundry",
        "name": "cf",
        "description": "Enables access to config properties provided by Cloud Foundry",
        "env": {
            "port" : 3001
        }
    },
    
After starting your app locally, your service  URL is:

    http://appname.vcap.me:4000/app.html
        
where `vcap.me` is always resolved to `localhost`.
 
## Configuration Example

### framework.json

None

### ca.json

None
  
    
        
            
 
