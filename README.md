# Personal Thought
If you've ever applied for jobs online, you know how time consuming it is. Thanks to some job sites finally releasing EASY/QUICK apply features, it's now possible to take it a step further. Let's be honest, do you really have the time to apply to hundreds of job postings? I built this chrome extension to "extend" my time doing other things like studying for interviews or listening to audiobooks.

# Jobs Auto Apply

Jobs Auto Apply is a Google Chrome extension that simply injects javascript on a jobs search result page.
All you have to do is configure the settings to match your job answers, go to LinkedIn Jobs and search something.
Jobs Auto Apply will do the rest of the clicking, form filling, and navigating. 

## What's implemented so far?
Currently the following features are supported on LinkedIn Jobs. 

### General Features
The following features are currently supported
* Walking Through Jobs       - Automatically click on a job item in the search result list
* Pick Easy Apply Jobs       - Clicks on the jobs that support Easy/Quick Apply and ignores others
* Navigate Pop-Up Boxes      - Clicks on the next buttons in the pop-up box until it reachs the end
* Auto-Fill Form Fields      - Inserts text and answers questions found in the form per your configuration
* Next Page Navigation       - Clicks on the next page of the search result once all jobs are walked through



### General Configuration
General config.js options that you can update
* Ajax Support         - app.config.ajaxSettings
* Search Suffixes      - app.config.searchSuffixes
* Search Services      - app.config.searchServices

### App Configuration
For those who want to extend the app itself
* Main Tabs            - app.config.mainTabs
* File Actions         - app.config.fileActions
* Search Crawlers      - app.config.searchCrawlers
* App Settings         - app.config.appSettings
* Default Search       - app.config.defaultSearch


## Usage - Configuration
To make configuration changes, open the `./js/config.js` file.
A UI may come later for the non-technical folks.

### app.questions

```javascript
   questions: {
        experience: {
            'search': 'years of'
        },
        certification: {
            'search': 'certification'
        },
        startWork: {
            'search': 'start immediately'
        },
        notice: {
            'search': 'Notice period',
        },
        location: {
            'search': 'Current Location'
        },
        authorized: {
            'search': 'authorized'
        },
        ...
   }
```

### app.answers 
```javascript
 answers: {
        experience: {
            'Content Management': 16,
            'Oracle Cloud': 3,
            'Microsoft': 12,
            'Consulting': 12,
            'Engineering': 12,
            'Management': 7,
            'Technology': 12,
            'Powershell': 5,
            'Embedded': 8,
            'WordPress': 12,
            'Magento': 8,
            'Mulesoft': 1,
            'Dynamics': 5,
            'GraphQL': 3,
            'Drupal': 9,
            'UiPath': 1,
            'GCP': 5,
            'XML': 16,
            'Unix': 8,
            'Linux': 8,
            'Python': 6,
            'SOAP': 12,
            'JAVA': 14,
            'SaaS': 12,
            'SSRS': 5,
            'Cisco': 5,
            'Azure': 5,
            'Sales': 12,
            'Jamf': 3,
            'AWS': 8,
            'GCP': 5,
            'C++': 5,
            'C#': 5
        },
        certification: {
            'Amazon': 'No',
            'Dynamics': 'No',
            'Cisco': 'No'
        },
        authorized: {
            'authorized': 'Yes',
        },
        ...
    }
```

## Adding more sites
To add another website:
1. Copy and rename the `./sites/linkedin.js` file.
2. Save the new file in the `./sites/` directory. Example: `./sites/yoursite.js`
3. Rename all `'linkedin'` strings to the new website name
4. Open the `./manifest.json` file and add `"sites/yoursite.js",` after `"sites/linkedin.js",`
5. Open `sites/yoursite.js` and make changes in the `app.config.autoStart` code block

### app.config.searchServices

```javascript
app.config.searchServices = [
    {
        text: '',
        active: true,
        enable: true,
        name: 'google',
        icon: 'google',
        url: 'https://www.google.com/search?q=',
        clickButton: false,
        searchButton: '#sfdiv button[type="submit"]',
        searchForm: '#tsf',
        searchText: '#lst-ib,.gLFyf.gsfi',
        resultLink: '#rso div.srg div.g div.rc h3 a',
        resultDesc: '#rso div.srg div.g div.rc div.s div .st',
        pagifyLink: '#nav a.fl',
        otherTerms: '#brs div.card-section div.brs_col p a',
        repeatLink: '#ofr a',
        pageNumber: '&num=',
        pageStart: '&start=',
        spawnCount: 25,
        resultSize: 100,
        resultAdd: 0
    }
];
```


## Installing the Extension

To install the extension
* Launch the Chrome browser and go to `chrome://extensions`; you should see the extension listed.
* Click the `LOAD UNPACKED` button and select the directory where the extension is located


### License

MIT License. Copyright 2020 Fortune Vieyra


## Authors & contributors
* Fortune Vieyra '@fortunevieyra http://www.linkedin.com/in/fortunevieyra'

# jobs-auto-apply
