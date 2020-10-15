app.bind({
    config: {

        showLogs: false,
        debug: true,

        //------------------------------------------------------------------------
        //--- REQUIRE SETTINGS - THIS CHANGES THE DEFAULT REQUIRED ITEMS TO SYNC -
        //------------------------------------------------------------------------
        //set save data url
        requireSettings: {},

        //------------------------------------------------------------------------
        //--- BACKUP SETTINGS - THIS CHANGES THE DEFAULT BEHAVIOR OF ALL BACKUPS -
        //--- By default the 'value' property is empty and updated when needed ---
        //------------------------------------------------------------------------
        //set save data url
        backupSettings: {
            //has started
            isStarted: false,
            //set backup wait
            waitCount: 0,
            //set wait max
            waitMax: 5,
            //set depth
            depth: 1,
            //set max depth
            depthMax: 3,
            //defer promise speed
            promiseSpeed: 100,
            //spped in miliseconds
            scrollSpeed: 2500,
            //limit scroll repeats
            scrollLimit: 100,
            //collection
            collectionIndex: 0,
            //set index
            priorityIndex: 0,
            //set depth index
            itemsDone: 0,
            //set depth index
            depthSize: 0,
            //set remaining
            remaining: 0,
            //se tcompleted
            totalDone: 0,
            //set in progress
            inProgress: false,
            //set page changes
            pageChanged: false,
            //set depth changed
            depthChanged: false,
            //page hash
            pageHash: false,
            //data hash
            dataHash: false,
            //set scheduled flag
            scheduled: false,
            //set start date
            startDate: 'Tue May 28 2021 19:53:27 GMT-0800 (Pacific Standard Time)',
            //set started on date
            startedOn: '',
            //set ended on date
            endedOn: '',
            //set service
            service: '',
            //set collection
            collection: '',
            //set estimated end
            endEstimate: 0,
            //set items in queue
            itemInQueue: [],
            //set item hash
            itemsHash: {},
            //set depth item
            depthItem: {},
            //set done hash map
            doneDepth: {},
            //set completed
            completed: {},
            //use priority only
            priorityOnly: {},
            //set recurse settings
            depthOptions: {
                //list to recurse 
                binding: {},
                //use priority only
                priorityOnly: {},
                //set priority
                priority: {}
            },
            //set sort by
            sortBy: {},
            //priority in collection
            priority: {}
        },


        //------------------------------------------------------------------------
        //--- BIND SETTINGS - THIS SETS DATA BINDING ON USER SPECIFIC DETAILS  ---
        //--- By default the 'value' property is empty and updated when needed ---
        //------------------------------------------------------------------------
        //set save data url
        bindSettings: {},

        //------------------------------------------------------------------------
        //--- GENERAL - YOU ARE FREE TO CHANGE THE  CATEGORIES AND SERVICES ------
        //--- Changing the below will give you want a different set of options ---
        //------------------------------------------------------------------------
        //search collectiones
        searchCollections: [],
        //search services
        searchServices: [],
        //search auto start
        autoStart: {}
    }
});