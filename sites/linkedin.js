
app.config.backupSettings.priorityOnly['linkedin'] = false;

app.config.backupSettings.depthOptions.priorityOnly['linkedin'] = true;

app.config.backupSettings.sortBy['linkedin'] = [];

app.config.backupSettings.depthOptions.binding['linkedin'] = {
    name: 'friends_all',
    collect: 'friends',
};

app.config.backupSettings.depthOptions.priority['linkedin'] = [
    'profile',
];

app.config.backupSettings.priority['linkedin'] = [
];

//update bind settings
app.config.bindSettings['linkedin'] = {
    //bind collection with
    bindWith: 'userId',
    bindValue: '',
    bindDefault: 'me',
    bindings: {
        userId: {
            value: '',
            query: '#bluebarRoot div[role="banner"] div[role="navigation"] div[data-click="profile_icon"] a',
            using: 'data-hovercard',
            regex: 'user.php?id={user_id}&',
            binds: '{user_id}',
            avoid: '',
            format: 'integer'
        },
        userName: {
            value: '',
            query: '#bluebarRoot div[role="banner"] div[role="navigation"] div[data-click="profile_icon"] a',
            using: 'href',
            regex: 'linkedin.com/{user_name}',
            binds: '{user_name}',
            avoid: '',
            format: ''
        },
        fullName: {
            value: '',
            query: '#userNav .sideNavItem > a > div[dir="ltr"].linkWrap',
            using: 'innerText',
            regex: '',
            binds: '{full_name}',
            avoid: '',
            format: ''
        },
        firstName: {
            value: '',
            query: '#bluebarRoot div[role="banner"] div[role="navigation"] div[data-click="profile_icon"] a span span',
            using: 'innerText',
            regex: '',
            binds: '{first_name}',
            avoid: '',
            format: ''
        },
        profileImage: {
            value: '',
            query: '#bluebarRoot div[role="banner"] div[role="navigation"] div[data-click="profile_icon"] a img',
            using: 'src',
            regex: '',
            binds: '{profile_image}',
            avoid: '',
            format: ''
        }
    }
};

app.config.requireSettings['linkedin'] = {
    //require settings
    bindSettings: {
        userId: true,
        userName: true,
        firstName: true,
    },
    //require settings
    searchCollections: {
        key: true,
        value: true,
        userId: true,
        userName: true,
        firstName: true,
        profileImage: true,
        videoId: true,
    },
};

//single - append to existing object
app.config.searchCollections = app.add([
	/*
    {
        active: false,
        name: 'member-data',
        value: 'member-data',
        route: [ '/psettings/member-data' ],
        service: 'linkedin',
        collect: {
            download: {
                items: {
                    query: 'div[role="feed"] .userContentWrapper',
                    using: 'scroll',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                fullName: {
                    query: 'h5 .fcg a[data-hovercard-prefer-more-content-show="1"]',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '{}',
                    format: ''
                },
                userId: {
                    query: 'h5 .fcg a[data-hovercard-prefer-more-content-show="1"]',
                    using: 'data-hovercard',
                    regex: '.php?id={user_id}&',
                    binds: '{user_id}',
                    avoid: 'undefined',
                    format: ''
                },
                userName: {
                    query: 'h5 .fcg a[data-hovercard-prefer-more-content-show="1"]',
                    using: 'href',
                    regex: 'linkedin.com/{user_name}?',
                    binds: '{user_name}',
                    avoid: "undefined,/,{}",
                    format: ''
                },
                groupName: {
                    query: 'h5 .fcg a[data-hovercard-prefer-more-content-show="1"]:nth-child(2n+1)',
                    using: 'outerText',
                    regex: '[\/groups\/].+\>(.)*\<',
                    //find values inside closing and opening arrow >[value]</
                    binds: '><',
                    //avoid match in username property
                    avoid: '[fullName],{}',
                    format: ''
                },
                groupId: {
                    query: 'h5 .fcg a[data-hovercard-prefer-more-content-show="1"]:nth-child(2n+1)',
                    using: 'href',
                    regex: '/groups/{group_id}/',
                    binds: '{group_id}',
                    avoid: 'https:,{}',
                    format: ''
                },
                likes:  {
                    query: '.commentable_item a > span:last-child span[data-hover="tooltip"]',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: 'integer'
                },
                image: {
                    query: 'a img[width="500"]',
                    using: 'src',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image_alt: {
                    query: 'a img[width="500"]',
                    using: 'alt',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                video: {
                    query: 'div[data-testid="story-subtitle"] span span.fcg a.async_saving',
                    using: 'href',
                    regex: '{video_path}?',
                    binds: '{video_path}',
                    avoid: 'undefined,{}',
                    format: ''
                },
                views:  {
                    query: '.mts div .mtm > div:last-child > div.clearfix .lfloat',
                    using: 'innerText',
                    regex: '{count} ',
                    binds: '{count}',
                    avoid: 'undefined',
                    format: 'integer'
                },
                date:  {
                    query: 'div[data-testid="story-subtitle"] .fcg abbr',
                    using: 'title',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: 'date'
                },
                text:  {
                    query: '.userContent',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'contacts',
        value: 'Contacts',
        route: '/mynetwork/contacts/',
        service: 'linkedin',
        collect: {
            timeline: {
                items: {
                    query: '#timeline_story_column .userContentWrapper',
                    using: 'scroll',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                fullName: {
                    query: 'h5 .fcg a',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                userId: {
                    query: 'h5 .fcg a',
                    using: 'data-hovercard',
                    regex: '.php?id={user_id}&',
                    binds: '{user_id}',
                    avoid: ''
                },
                userName: {
                    query: 'h5 .fcg a',
                    using: 'href',
                    regex: 'linkedin.com/{user_name}?',
                    binds: '{user_name}',
                    avoid: "undefined,/",
                    format: ''
                },
                groupName: {
                    query: 'h5 .fcg a:nth-child(2n+1)',
                    using: 'outerText',
                    regex: '[\/groups\/].+\>(.)*\<',
                    //find values inside closing and opening arrow >[value]</
                    binds: '><',
                    //avoid match in username property
                    avoid: '[fullName]',
                    format: ''
                },
                groupId: {
                    query: 'h5 .fcg a:nth-child(2n+1)',
                    using: 'href',
                    regex: '/groups/{group_id}/',
                    binds: '{group_id}',
                    avoid: 'https:',
                    format: ''
                },
                likes:  {
                    query: '.commentable_item a > span:last-child span[data-hover="tooltip"]',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: 'integer'
                },
                image: {
                    query: 'a img[width="516"]',
                    using: 'src',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image_alt: {
                    query: 'a img[width="516"]',
                    using: 'alt',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                video: {
                    query: 'div[data-testid="story-subtitle"] span span.fcg a.async_saving',
                    using: 'href',
                    regex: '{video_path}?',
                    binds: '{video_path}',
                    avoid: 'undefined',
                    format: ''
                },
                views:  {
                    query: '.mts div .mtm > div:last-child > div.clearfix .lfloat',
                    using: 'innerText',
                    regex: '{count} ',
                    binds: '{count}',
                    avoid: 'undefined',
                    format: 'integer'
                },
                date:  {
                    query: 'div[data-testid="story-subtitle"] .fcg abbr',
                    using: 'title',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: 'date'
                },
                text:  {
                    query: '.userContent',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            intro: {
                items: {
                    query: '#profile_timeline_intro_card #intro_container_id > div > div > ul.uiList li .textContent',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                text:  {
                    query: 'div',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '[text]',
                    format: ''
                },
                link:  {
                    query: 'a',
                    using: 'href',
                    regex: '',
                    binds: '',
                    avoid: '[link]',
                    format: ''
                },
            },
            featured_photos: {
                items: {
                    query: '#profile_timeline_intro_card div div div a[rel="theater"]',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                image:  {
                    query: 'img',
                    using: 'src',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image_alt:  {
                    query: 'img',
                    using: 'alt',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            photos: {
                items: {
                    query: '#profile_timeline_tiles_unit_pagelets div div div a[rel="theater"]',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                image:  {
                    query: 'img',
                    using: 'src',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image_alt: {
                    query: 'img',
                    using: 'alt',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            friends: {
                items: {
                    query: '#profile_timeline_tiles_unit_pagelets_friends table tr td',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                fullName: {
                    query: 'a',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                userId: {
                    query: 'a',
                    using: 'data-hovercard',
                    regex: 'user.php?id={user_id}&',
                    binds: '{user_id}',
                    avoid: '',
                    format: 'integer'
                },
                userName: {
                    query: 'a',
                    using: 'href',
                    regex: 'linkedin.com/{user_name}?',
                    binds: '{user_name}',
                    avoid: "undefined",
                    format: 'one-line'
                },
                profileImage:  {
                    query: 'a img',
                    using: 'src',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            languages: {
                items: {
                    query: '#pagelet_rhc_footer .uiContextualLayerParent .fcg span:first-child, #pagelet_rhc_footer .uiContextualLayerParent .fcg a',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                text:  {
                    query: '',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                link: {
                    query: '',
                    using: 'href',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'friends_all',
        value: 'All Friends',
        route: [ '/{user_name}/friends_all', '/{user_name}/friends?lst='],
        service: 'linkedin',
        collect: {
            friends: {
                items: {
                    query: '#pagelet_timeline_medley_friends ul.uiList li',
                    using: 'scroll',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                fullName: {
                    query: 'div[data-testid="friend_list_item"] > div .uiProfileBlockContent .fcb > a',
                    using: 'innerText',
                    regex: '',
                    binds: '{full_name}',
                    avoid: '',
                    format: ''
                },
                userId: {
                    query: 'div[data-testid="friend_list_item"] > div .uiProfileBlockContent .fcb > a',
                    using: 'data-hovercard',
                    regex: 'user.php?id={user_id}&',
                    binds: '{user_id}',
                    avoid: '',
                    format: 'integer'
                },
                userName: {
                    query: 'div[data-testid="friend_list_item"] > div .uiProfileBlockContent .fcb > a',
                    using: 'href',
                    regex: 'linkedin.com/{user_name}?',
                    binds: '{user_name}',
                    avoid: "undefined",
                    format: 'one-line'
                },
                headline: {
                    query: 'div[data-testid="friend_list_item"] > div .uiProfileBlockContent .uiList li span.fwn',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: "undefined",
                    format: ''
                },
                profileImage:  {
                    query: 'div[data-testid="friend_list_item"] > a > img',
                    using: 'src',
                    regex: '',
                    binds: '{profile_image}',
                    avoid: '',
                    format: ''
                },
                totalFriends:  {
                    query: 'div[data-testid="friend_list_item"] > div .uiProfileBlockContent .fcb + a',
                    using: 'innerText',
                    regex: '{count} friends',
                    binds: '{count}',
                    avoid: 'undefined',
                    format: 'integer'
                },
            },
        }
    },
    {
        active: false,
        name: 'friends_recent',
        value: 'Recently Added Friends',
        route: '/{user_name}/friends_recent',
        service: 'linkedin',
        collect: {
            friends: {
                items: {
                    query: '#pagelet_timeline_medley_friends ul.uiList li',
                    using: 'scroll',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                fullName: {
                    query: 'div[data-testid="friend_list_item"] > div .uiProfileBlockContent .fcb > a',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                userId: {
                    query: 'div[data-testid="friend_list_item"] > div .uiProfileBlockContent .fcb > a',
                    using: 'data-hovercard',
                    regex: 'user.php?id={user_id}&',
                    binds: '{user_id}',
                    avoid: '',
                    format: 'integer'
                },
                userName: {
                    query: 'div[data-testid="friend_list_item"] > div .uiProfileBlockContent .fcb > a',
                    using: 'href',
                    regex: 'linkedin.com/{user_name}?',
                    binds: '{user_name}',
                    avoid: "undefined",
                    format: 'one-line'
                },
                headline: {
                    query: 'div[data-testid="friend_list_item"] > div .uiProfileBlockContent .uiList li span.fwn',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: "undefined",
                    format: ''
                },
                profileImage:  {
                    query: 'div[data-testid="friend_list_item"] > a > img',
                    using: 'src',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                totalFriends:  {
                    query: 'div[data-testid="friend_list_item"] > div .uiProfileBlockContent .fcb + a',
                    using: 'innerText',
                    regex: '{count} friends',
                    binds: '{count}',
                    avoid: 'undefined',
                    format: 'integer'
                },
            },
        }
    },
    {
        active: false,
        name: 'friends_with_unseen_posts',
        value: 'Friends With New Posts',
        route: '/{user_name}/friends_with_unseen_posts',
        service: 'linkedin',
        collect: {
            friends: {
                items: {
                    query: '#pagelet_timeline_medley_friends ul.uiList li',
                    using: 'scroll',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                fullName: {
                    query: 'div[data-testid="friend_list_item"] > div .uiProfileBlockContent .fcb > a',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                userId: {
                    query: 'div[data-testid="friend_list_item"] > div .uiProfileBlockContent .fcb > a',
                    using: 'data-hovercard',
                    regex: 'user.php?id={user_id}&',
                    binds: '{user_id}',
                    avoid: '',
                    format: 'integer'
                },
                userName: {
                    query: 'div[data-testid="friend_list_item"] > div .uiProfileBlockContent .fcb > a',
                    using: 'href',
                    regex: 'linkedin.com/{user_name}?',
                    binds: '{user_name}',
                    avoid: "undefined",
                    format: 'one-line'
                },
                headline: {
                    query: 'div[data-testid="friend_list_item"] > div .uiProfileBlockContent .uiList li span.fwn',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: "undefined",
                    format: ''
                },
                profileImage:  {
                    query: 'div[data-testid="friend_list_item"] > a > img',
                    using: 'src',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                totalPosts:  {
                    query: 'div[data-testid="friend_list_item"] > div .uiProfileBlockContent .fcb + span',
                    using: 'innerText',
                    regex: '{count} new posts',
                    binds: '{count}',
                    avoid: 'undefined',
                    format: 'integer'
                },
            },
        }
    },
    {
        active: false,
        name: 'following',
        value: 'Following',
        route: '/{user_name}/following',
        service: 'linkedin',
        collect: {
            following: {
                items: {
                    query: '#pagelet_collections_following .standardLayout ul.uiList li',
                    using: 'scroll',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                fullName: {
                    query: 'div[data-testid="friend_list_item"] > div .fsl > a',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                userId: {
                    query: 'div[data-testid="friend_list_item"] > div .fsl > a',
                    using: 'data-hovercard',
                    regex: 'user.php?id={user_id}&',
                    binds: '{user_id}',
                    avoid: '',
                    format: 'integer'
                },
                userName: {
                    query: 'div[data-testid="friend_list_item"] > div .fsl > a',
                    using: 'href',
                    regex: 'linkedin.com/{user_name}?',
                    binds: '{user_name}',
                    avoid: "undefined",
                    format: 'one-line'
                },
                headline: {
                    query: 'div[data-testid="friend_list_item"] > div .uiList li span.fsm',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: 'undefined',
                    format: ''
                },
                profileImage:  {
                    query: 'div[data-testid="friend_list_item"] > a > img',
                    using: 'src',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                followersCount:  {
                    query: 'div[data-testid="friend_list_item"] > div .fsl + .fcg span:last-child',
                    using: 'innerText',
                    regex: '{count} follower',
                    binds: '{count}',
                    avoid: 'undefined',
                    format: 'integer'
                },
            },
        }
    },
    {
        active: false,
        name: 'about_overview',
        value: 'About Overview',
        route: [ '/{user_name}/about?section=overview', '/{user_name}/about?lst={any}&section=overview' ],
        service: 'linkedin',
        collect: {
            overview: {
                items: {
                    query: '#pagelet_timeline_medley_about div:last-child > div > ul.uiList > li > div > div:last-child ul.uiList li > div:first-child ',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                image:  {
                    query: 'a.lfloat img',
                    using: 'src',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: 'a.lfloat + div > div > div',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            contact: {
                items: {
                    query: '#pagelet_timeline_medley_about div:last-child > div > ul.uiList > li > div > div:last-child ul.uiList li a, ul.uiList[data-overviewsection="contact_basic"] li > div',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                key: {
                    query: 'div > span > div:first-child',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                value:  {
                    query: 'div > span > div:last-child',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'about_education',
        value: 'About Education',
        route: [ '/{user_name}/about?section=education', '/{user_name}/about?lst={any}&section=education' ],
        service: 'linkedin',
        collect: {
            experience: {
                items: {
                    query: '#pagelet_eduwork .uiList li,.uiList li.fbEditProfileViewExperience',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                image:  {
                    query: 'a.lfloat img',
                    using: 'src',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                title:  {
                    query: 'a.lfloat + div > div > div a',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                link:  {
                    query: 'a.lfloat + div > div > div a',
                    using: 'href',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: 'a.lfloat + div > div > div > div:last-child',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: 'one-line'
                },
            },
            skills: {
                items: {
                    query: '.fbProfileEditExperiences li a',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link:  {
                    query: '',
                    using: 'href',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
        }
    },
    {
        active: false,
        name: 'about_living',
        value: 'Places You Lived',
        route: [ '/{user_name}/about?section=living', '/{user_name}/about?lst={any}&section=living' ],
        service: 'linkedin',
        collect: {
            places: {
                items: {
                    query: '#pagelet_hometown ul.uiList li',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                image:  {
                    query: 'div > div > div.clearfix > img',
                    using: 'src',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                title:  {
                    query: 'div > div > div.clearfix > img + div span a',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                link:  {
                    query: 'div > div > div.clearfix > img + div span a',
                    using: 'href',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: 'div > div > div.clearfix > img + div span + div.fcg',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: 'one-line'
                },
            },
        }
    },
    {
        active: false,
        name: 'about_contact_info',
        value: 'Contact Information',
        route: [ '/{user_name}/about?section=contact-info', '/{user_name}/about?lst={any}&section=contact-info' ],
        service: 'linkedin',
        collect: {
            contact: {
                items: {
                    query: 'ul.uiList li > div > div:last-child ul.uiList li',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                key: {
                    query: 'div.clearfix > div span[role="heading"]',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: 'Overview',
                    format: ''
                },
                value: {
                    query: 'div.clearfix > div:last-child',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'about_relationship',
        value: 'Relationships',
        route: [ '/{user_name}/about?section=relationship', '/{user_name}/about?lst={any}&section=relationship' ],
        service: 'linkedin',
        collect: {
            relationship: {
                items: {
                    query: '#pagelet_timeline_medley_about div:last-child > div > ul.uiList li > div > div:last-child > div > div > div',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                key: {
                    query: 'div.clearfix span[role="heading"]',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: 'Overview',
                    format: ''
                },
                value: {
                    query: 'div.clearfix + ul li .lfloat + div div',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'about_bio',
        value: 'About You',
        route: [ '/{user_name}/about?section=bio', '/{user_name}/about?lst={any}&section=bio' ],
        service: 'linkedin',
        collect: {
            about: {
                items: {
                    query: '#pagelet_timeline_medley_about div:last-child > div > ul.uiList li > div > div:last-child > div > div > div',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                key: {
                    query: 'div.clearfix span[role="heading"]',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: 'Overview',
                    format: ''
                },
                value: {
                    query: 'div.clearfix + ul li div div span',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'about_life_events',
        value: 'Life Events',
        route: [ '/{user_name}/about?section=year-overviews', '/{user_name}/about?lst={any}&section=year-overviews' ],
        service: 'linkedin',
        collect: {
            events: {
                items: {
                    query: '#pagelet_timeline_medley_about div:last-child > div > ul.uiList li > div > div:last-child > div > div > ul > li',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                key: {
                    query: 'div.clearfix > div:first-child',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: 'integer'
                },
                value: {
                    query: 'div.clearfix > div:last-child',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'photos_all',
        value: 'All Photos',
        route: [ '/{user_name}/photos_all', '/{user_name}/photos?lst=' ],
        service: 'linkedin',
        collect: {
            photos: {
                items: {
                    query: '#pagelet_timeline_medley_photos ul.fbStarGrid li',
                    using: 'scroll',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                image: {
                    query: 'a.uiMediaThumb .tagWrapper i.uiMediaThumbImg',
                    using: 'style.backgroundImage',
                    regex: ' url({image_src})',
                    binds: '{image_src}',
                    avoid: 'url(,",)',
                    format: ''
                },
                link: {
                    query: 'a.uiMediaThumb',
                    using: 'href',
                    regex: '',
                    binds: ' ',
                    avoid: '',
                    format: ''
                },
                imageId: {
                    query: 'a.uiMediaThumb',
                    using: 'id',
                    regex: 'pic_{image_id}',
                    binds: '{image_id}',
                    avoid: '',
                    format: ''
                },
                imageAlt: {
                    query: 'a.uiMediaThumb ',
                    using: 'outerHTML',
                    regex: 'aria-label="{text}"',
                    binds: '{text}',
                    avoid: '',
                    format: ''
                },
            },
        }
    },
    {
        active: false,
        name: 'photos_of',
        value: 'Photos of You',
        route: '/{user_name}/photos_of',
        service: 'linkedin',
        collect: {
            photos: {
                items: {
                    query: '#pagelet_timeline_medley_photos ul.fbStarGrid li',
                    using: 'scroll',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                image: {
                    query: 'a.uiMediaThumb .tagWrapper i.uiMediaThumbImg',
                    using: 'style.backgroundImage',
                    regex: ' url({image_src})',
                    binds: '{image_src}',
                    avoid: 'url(,",)',
                    format: ''
                },
                link: {
                    query: 'a.uiMediaThumb',
                    using: 'href',
                    regex: '',
                    binds: ' ',
                    avoid: '',
                    format: ''
                },
                imageId: {
                    query: 'a.uiMediaThumb',
                    using: 'id',
                    regex: 'pic_{image_id}',
                    binds: '{image_id}',
                    avoid: '',
                    format: ''
                },
                imageAlt: {
                    query: 'a.uiMediaThumb ',
                    using: 'outerHTML',
                    regex: 'aria-label="{text}"',
                    binds: '{text}',
                    avoid: '',
                    format: ''
                },
            },
        }
    },
    {
        active: false,
        name: 'photos_albums',
        value: 'Photos Albumns',
        route: '/{user_name}/photos_albums',
        service: 'linkedin',
        collect: {
            photos: {
                items: {
                    query: 'table.uiGrid tr:not(:first-child) td > div,table.uiGrid tr:first-child td:last-child > div',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                image: {
                    query: '.uiScaledImageContainer img',
                    using: 'src',
                    regex: ' url({image_src})',
                    binds: '{image_src}',
                    avoid: 'url(,",),{}',
                    format: ''
                },
                link: {
                    query: 'a',
                    using: 'href',
                    regex: '',
                    binds: ' ',
                    avoid: '',
                    format: ''
                },
                title: {
                    query: '.uiScaledImageContainer + div > div > div:first-child span',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                albumStats: {
                    query: '.uiScaledImageContainer + div > div > div:last-child span',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                imageAlt: {
                    query: '.uiScaledImageContainer img',
                    using: 'alt',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
        }
    },
    {
        active: false,
        name: 'groups',
        value: 'Groups',
        route: [ '/{user_name}/groups', '/{user_name}/groups_member?lst=' ],
        service: 'linkedin',
        collect: {
            groups: {
                items: {
                    query: '#pagelet_timeline_medley_groups div:last-child ul.uiList li',
                    using: 'scroll',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link: {
                    query: '.clearfix div:last-child .mtm .fwb a',
                    using: 'href',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                title:  {
                    query: '.clearfix div:last-child .mtm .fwb a',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                groupId: {
                    query: '.clearfix div:last-child .mtm .fwb a',
                    using: 'data-hovercard',
                    regex: '.php?id={user_id}&',
                    binds: '{user_id}',
                    avoid: '',
                    format: ''
                },
                membersCount: {
                    query: '.clearfix div.lfloat + div.clearfix .mtm .fcg',
                    using: 'innerText',
                    regex: '{count} member',
                    binds: '{count}',
                    avoid: 'member',
                    format: 'integer'
                },
                images:  {
                    query: '.clearfix div.lfloat img',
                    using: 'src',
                    regex: '',
                    binds: '',
                    avoid: '',
                    //multiple items
                    format: 'array'
                },
                headline:  {
                    query: '.clearfix div.lfloat + div.clearfix .mtm .fcg + span',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
        }
    },
    {
        active: false,
        name: 'videos',
        value: 'Videos',
        route: '/{user_name}/videos',
        service: 'linkedin',
        collect: {
            videos: {
                items: {
                    query: '#pagelet_timeline_medley_videos > div:last-child > div > ul.fbStarGrid > li',
                    using: 'scroll',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link: {
                    query: 'a[rel="async"]',
                    using: 'href',
                    regex: '',
                    binds: ' ',
                    avoid: '',
                    format: ''
                },
                image: {
                    query: 'a[rel="async"] span div:first-child img',
                    using: 'src',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                videoId: {
                    query: '',
                    using: 'data-fbid',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                label: {
                    query: 'a[rel="async"]',
                    using: 'outerHTML',
                    regex: 'aria-label="{text}"',
                    binds: '{text}',
                    avoid: '',
                    format: ''
                },
            },
        }
    },
    {
        active: false,
        name: 'map',
        value: 'Check-ins',
        route: [ '/{user_name}/map?lst=', '/{user_name}/places_visited?lst=' ],
        service: 'linkedin',
        collect: {
            list: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                user: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            main: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'sports',
        value: 'Sports',
        route: [ '/{user_name}/sports?lst=', '/{user_name}/sports_teams?lst=' ],
        service: 'linkedin',
        collect: {
            list: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                user: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            main: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'music',
        value: 'Music',
        route: [ '/{user_name}/music?lst=', '/{user_name}/music_favs?lst=' ],
        service: 'linkedin',
        collect: {
            list: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                user: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            main: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'movies',
        value: 'Movies',
        route: [ '/{user_name}/movies?lst=', '/{user_name}/video_movies_watch?lst=' ],
        service: 'linkedin',
        collect: {
            list: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                user: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            main: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'tv',
        value: 'TV Shows',
        route: [ '/{user_name}/tv?lst=', '/{user_name}video_tv_shows_watch?lst=' ],
        service: 'linkedin',
        collect: {
            list: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                user: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            main: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'books',
        value: 'Books',
        route: [ '/{user_name}/books?lst=', '/{user_name}/books_read?lst=' ],
        service: 'linkedin',
        collect: {
            list: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                user: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            main: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'likes',
        value: 'Likes',
        route: [ '/{user_name}/likes?lst=', '/{user_name}/likes_all?lst=' ],
        service: 'linkedin',
        collect: {
            list: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                user: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            main: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'events',
        value: 'Events',
        route: [ '/{user_name}/events?lst=', '/{user_name}/past_events?lst=' ],
        service: 'linkedin',
        collect: {
            list: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                user: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            main: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'questions',
        value: 'Questions',
        route: '/{user_name}/did_you_know?lst=',
        service: 'linkedin',
        collect: {
            list: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                user: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            main: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'reviews',
        value: 'Reviews',
        route: '/{user_name}/reviews?lst=',
        service: 'linkedin',
        collect: {
            list: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                user: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            main: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'notes',
        value: 'Notes',
        route: '/{user_name}/notes?lst=',
        service: 'linkedin',
        collect: {
            list: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                user: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            main: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'find_friends',
        value: 'Find Friends',
        route: [ '/?sk=ff', '/find-friends/browser/' ],
        service: 'linkedin',
        collect: {
            people: {
                items: {
                    query: '.friendBrowserCheckboxContentGrid ul li.friendBrowserListUnit',
                    using: 'scroll',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                fullName: {
                    query: '.friendBrowserContentAlignMiddle .friendBrowserNameTitle a',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                userId: {
                    query: '.friendBrowserContentAlignMiddle .friendBrowserNameTitle a',
                    using: 'data-hovercard',
                    regex: '.php?id={user_id}&',
                    binds: '{user_id}',
                    avoid: '',
                    format: ''
                },
                userName: {
                    query: '.friendBrowserContentAlignMiddle .friendBrowserNameTitle a',
                    using: 'href',
                    regex: 'linkedin.com/{user_name}?',
                    binds: '{user_name}',
                    avoid: "undefined,profile.php",
                    format: ''
                },
                headline: {
                    query: '.friendBrowserMarginTopMini .uiGrid tbody tr td .fsm span.fcg',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: "undefined",
                    format: ''
                },
                profileImage:  {
                    query: '.friendBrowserPhotoWrapper img.img',
                    using: 'src',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
        }
    },
    {
        active: false,
        name: 'friend_requests',
        value: 'Friend Requests',
        route: [ '/friends/requests/', '/friends/requests/?split=1&fcref=ft' ],
        service: 'linkedin',
        collect: {
            people: {
                items: {
                    query: '#globalContainer > div.fb_content > div.clearfix > div.lfloat > div:first-child div:last-child > div.clearfix',
                    using: 'scroll',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                fullName: {
                    query: 'a.lfloat + div.clearfix div:last-child div.fcg > div > a',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                userId: {
                    query: 'a.lfloat + div.clearfix div:last-child div.fcg > div > a',
                    using: 'data-hovercard',
                    regex: 'user.php?id={user_id}&',
                    binds: '{user_id}',
                    avoid: '',
                    format: 'integer'
                },
                userName: {
                    query: 'a.lfloat + div.clearfix div:last-child div.fcg > div > a',
                    using: 'href',
                    regex: 'linkedin.com/{user_name}?',
                    binds: '{user_name}',
                    avoid: "undefined",
                    format: 'one-line'
                },
                headline: {
                    query: 'a.lfloat + div.clearfix div:last-child div.fcg .requestInfoContainer > div:first-child .uiGrid',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: "undefined",
                    format: ''
                },
                reference: {
                    query: 'a.lfloat + div.clearfix div:last-child div.fcg .requestInfoContainer > div:last-child span',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: "undefined",
                    format: ''
                },
                profileImage:  {
                    query: 'a.lfloat img.scaledImageFitWidth',
                    using: 'src',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
        }
    },
    {
        active: false,
        name: 'messages',
        value: 'Messages',
        route: '/messages/t/',
        service: 'linkedin',
        collect: {
            list: {
                items: {
                    query: '#globalContainer #content div > div > div > div:first-child ul[role="grid"] li',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link: {
                    query: 'div[role="gridcell"] > a[role="link"] ',
                    using: 'data-href',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                user: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            main: {
                items: {
                    query: '#globalContainer #content > div > div > div > div:last-child div[role="region"] > div:nth-child(3)',
                    using: 'innerText',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'notifications',
        value: 'Notifications',
        route: '/notifications',
        service: 'linkedin',
        collect: {
            list: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                user: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            main: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'groups_invited',
        value: 'Groups Invited',
        route: '/groups/?category=invited',
        service: 'linkedin',
        collect: {
            list: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                user: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            main: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'your_groups',
        value: 'Your Groups',
        route: '/groups/?category=groups',
        service: 'linkedin',
        collect: {
            list: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                user: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            main: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'discover_groups',
        value: 'Discover Groups',
        route: '/groups/?category=discover',
        service: 'linkedin',
        collect: {
            list: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                user: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            main: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'activity',
        value: 'Activity',
        route: '/{user_name}/allactivity?privacy_source=activity_log&log_filter=all&category_key=all',
        service: 'linkedin',
        collect: {
            list: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                user: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            main: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'settings',
        value: 'Settings',
        route: '/settings',
        service: 'linkedin',
        collect: {
            list: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                user: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            main: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'settings_general',
        value: 'Account Settings',
        route: '/settings?tab=account',
        service: 'linkedin',
        collect: {
            list: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                user: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            main: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'security',
        value: 'Security Settings',
        route: '/settings?tab=security',
        service: 'linkedin',
        collect: {
            list: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                user: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            main: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'blocking',
        value: 'Blocking Settings',
        route: '/settings?tab=blocking',
        service: 'linkedin',
        collect: {
            list: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                user: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            main: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'language',
        value: 'Language Settings',
        route: '/settings?tab=language',
        service: 'linkedin',
        collect: {
            list: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                user: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            main: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
    {
        active: false,
        name: 'mobile',
        value: 'Mobile Settings',
        route: '/settings?tab=mobile',
        service: 'linkedin',
        collect: {
            list: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                link: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                user: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                image:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            },
            main: {
                items: {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                }, 
                date:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
                text:  {
                    query: '',
                    using: '',
                    regex: '',
                    binds: '',
                    avoid: '',
                    format: ''
                },
            }
        }
    },
*/
], app.config.searchCollections );


app.config.searchServices = app.add([
    {
        text: '',
        active: true,
        enable: true,
        name: 'linkedin',
        icon: 'linkedin',
        domain: 'www.linkedin.com',
        url: 'https://www.linkedin.com',
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
], app.config.searchServices );


// set autostart services
app.config.autoStart['linkedin'] = function() {

    var storage = 'local'; //local, session
    var didClick = false;
    var nextPage = false;
    var clickModal = false;
    var isLoading = false;
    var modalClicks = 0;
    var inputEvents = 'mouseover,mouseenter,mousemove,transitionend,focus,focusin,select,keyup,transitionend,blur,focusout,transitionend,mouesout,mouseleave,transitionend';
    var eventsList = 'abort,afterprint,animationend,animationiteration,animationstart,beforeprint,beforeunload,blur,canplay,canplaythrough,change,click,contextmenu,copy,cut,dblclick,drag,dragend,dragenter,dragleave,dragover,dragstart,drop,durationchange,ended,error,focus,focusin,focusout,fullscreenchange,fullscreenerror,hashchange,input,invalid,keydown,keypress,keyup,load,loadeddata,loadedmetadata,loadstart,message,mousedown,mouseenter,mouseleave,mousemove,mouseover,mouseout,mouseup,mousewheel,offline,online,open,pagehide,pageshow,paste,pause,play,playing,popstate,progress,ratechange,resize,reset,scroll,search,seeked,seeking,select,show,stalled,storage,submit,suspend,timeupdate,toggle,touchcancel,touchend,touchmove,touchstart,transitionend,unload,volumechange,waiting,wheel'.split(',');
    //set pause default
    window.isPause = false;
    //set disable text
    window.disableText = true;
    //set profile url
    window.profileURL = '';
    //set profile name
    window.profileName = '';
    //set profile email
    window.profileEmail = '';

    //get session storage
    var getStorage = function( name ){
        return app.storage.get( name, storage );
    };
    //set session storage
    var setStorage = function( name, value){
        return app.storage.set( name, value, storage );
    };
    //set dummy function
    var reportStatus = function( text ){
        console.log( text );
    };
    //save jobs applied to
    var saveAppliedTo = function(){
        var date = new Date().toLocaleDateString();
    	var item = getActiveItem();
    	var title = item[0].querySelector('.job-card-list__title').innerText;
    	var company = item[0].querySelector('.artdeco-entity-lockup__subtitle').innerText;
    	var location = item[0].querySelector('.job-card-container__metadata-item').innerText;
    	var image = item[0].querySelector('.job-card-container__link img').src;
    	// set job object
    	var job = {
            date: date,
    		image: image,
    		title: title,
    		company: company,
    		location: location
    	};
        // set applied
    	var applied = getStorage('applied') || [];
        // add to applid
        applied.push( job );
        // set applied
        setStorage('applied', applied);
        // return applied
        return applied;
    };
    //get update
    var loadObject = function( name, hasIndex) {
        //attempt to get from local storage
        var temp = getStorage( name ) || ( hasIndex ? [] : {} ); 
        //check for string
        window[ name ] = ( typeof temp !== 'object' ) ? JSON.parse( temp ) : temp;
    };
    //set object
    var saveObject = function( name, obj ) {
        setStorage( name, JSON.stringify(  ( obj ? obj : window[ name ] ) ) );
    };
    // get page item
    var getPageItems = function(){
    	if( app.debug ) debugger;
    	return app.query('.artdeco-pagination__indicator--number button');
    };
    // get active Page
    var getActivePage = function(){
    	return app.query('.artdeco-pagination__indicator--number.active');
    };
    //get list item
    var getListItems = function(){
    	if( app.debug ) debugger;
    	return app.query('li div.job-card-container');
    };
    // get active item
    var getActiveItem = function( items ){
    	return app.find('.job-card-search--is-active,.jobs-search-results-list__list-item--active,.jobs-search-two-pane__job-card-container--active');
    };
    //set simulate click
    var simulateClick = function( obj, value, type ) {
    	// set value
    	// obj.value = value;
    	/*
    	// set events list
    	for(let x=0; x < eventsList.length; x++) {
	    	obj.addEventListener(eventsList[x], function(){
	    		console.log(eventsList[x]);
	    	});
	    }
	    // set input events
	    for(var i=0; i < inputEvents.length; i++) {
	    	// click on object
	    	app.click( obj, document, inputEvents[i]);
		}
		*/
		if( type === 'select' ) {
			obj.value = value
		}
		// return ( obj.value !== '' ) ? 1 : 0
		return true;
    };
    //check for overlay
    var hasOverlay = function() {
    	return ( app.query('.artdeco-modal-overlay').length > 0 )
    };
    //check input fields
    var hasEmptyFields = function(){
    	let empty = 0;
    	let groups = document.querySelectorAll('.jobs-easy-apply-form-section__grouping');
    	// loop in labels
    	if( groups.length > 0 ) {
    		// look in groups
	    	for( var l=0; l < groups.length;l++ ) {
	    		let group = groups[l];
		    	let input = group.querySelectorAll('.fb-single-line-text__input' );
		    	if( input.length > 0 ) {
		    		for(var i=0; i < input.length; i++) {
		    			if( input[i].value === '' ) {
		    				empty++;
		    			}
		    		}
		    	}
		    }
		}
    	return ( empty > 0 )
    };
    // set prefill section
    var prefillSections = function(){
    	// check for form section element
    	let groups = document.querySelectorAll('.jobs-easy-apply-form-section__grouping');
    	// check question type
    	let questions = {
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
    		citizenship: {
    			'search': 'citizenship'
    		},
    		employment: {
    			'search': 'employment'
    		},
    		education: {
    			'search': 'education'
    		},
			address: {
				'search': 'address '
			},
			employed: {
				'search': 'employed'
			},
			fullTime: {
				'search': 'Full Time employee'
			},
			relocate: {
				'search': 'relocate'
			},
			city: {
				'search': 'City'
			},
			onsite: {
				'search': 'work onsite'
			},
			immigration: {
				'search': 'immigration status'
			},
			considering: {
				'search': 'Considering a Change'
			},
			sponsorship: {
				'search': 'sponsorship'
			},
			postalCode: {
				'search': 'Postal Code'
			},
			commuting: {
				'search': 'commuting'
			},
			clearance: {
				'search': 'clearance'
			},
			polygraph: {
				'search': 'polygraph'
			},
			relative: {
				'search': 'relative'
			},
			english: {
				'search': 'english'
			},
			salary: {
				'search': 'salary'
			},
			state: {
				'search': 'State'
			},
			gender: {
				'search': 'Gender'
			},
			name: {
				'search': 'Name'
			},
			sms: {
				'search': 'SMS'
			}
    	};
    	let answers = {
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
    		fullTime: {
    			'employee': 'Yes'
    		},
    		employment: {
    			'employment': 'No',
    		},
    		education: {
    			'Bachelor': 'No'
    		},
    		relocate: {
    			'relocate': 'Yes'
    		},
			employed: {
				'employed': 'No'
			},
			english: {
				'english': 'Yes'
			},
			startWork: {
				'start': 'Yes',
			},
			onsite: {
				'onsite': 'Yes',
			},
			sponsorship: {
				'sponsorship': 'No'
			},
			commuting: {
				'commuting': 'Yes'
			},
			clearance: {
				'clearance': 'No',
			},
			polygraph: {
				'polygraph': 'No',
			},
			relative: {
				'relative': 'No'
			},
			sms: {
				'SMS': 'Yes'
			},
			salary: {
				'salary': '245000'
			},
			state: {
				'State': 'Texas'
			},
			gender: {
				'Gender': 'Male'
			},
			city: {
				'City': 'Houston'
			},
			postalCode: {
				'ZIP': '77002'
			},
    		notice: {
    			'notice': '2 week'
    		},
			name: {
				'Name': 'Fortune Vieyra'
			},
    		location: {
    			'location': 'San Jose, CA'
    		},
			address: {
				'address': '945 McKinney Street #574' 
			},
			considering: {
				'considering': 'Seeking new opportunities'
			},
    		citizenship: {
    			'citizenship': 'U.S. Citizen/Permanent Resident'
    		},
    		immigration: {
    			'imigration': 'US Citizen'
    		}
    	};
    	// set counts
    	let added = 0;
    	let total = 0;
    	// loop in labels
    	if( groups.length > 0 ) {
    		// set total
    		total = groups.length;
    		// look in groups
	    	for( var l=0; l < groups.length;l++ ) {
	    		// set section labels
	    		let group = groups[ l ];
	    		let label = group.querySelectorAll('.fb-form-element-label' );
	    		let input = group.querySelectorAll('.fb-single-line-text__input' );
	    		let radio = group.querySelectorAll('.fb-radio-buttons input' );
	    		let select = group.querySelectorAll('.fb-select' );
	    		// check for label
	    		if( label && label.length > 0 ) {
		    		// check if label has experience years
		    		for( var type in questions ) {
		    			// check if found
		    			let search = questions[ type ]['search'];
		    			let after = questions[ type ]['after'];
		    			let answer = answers[ type ];
	    				// check questions
	    				if( label[0].innerText.indexOf( search ) !== -1 ) {
	    					// set find
	    					let find = label[0].innerText;
	    					// check answers
	    					for(var key in answer) {
	    						// set low
	    						let lkey = (key+'').toLowerCase();
	    						let lfnd = (find+'').toLowerCase();
	    						let valu = answer[ key ];
	    						// check if found
	    						if( lfnd.indexOf( lkey ) !== -1 ) {
	    							// check for radio
	    							if( radio.length > 1 ) {
	    								// check value
	    								if( radio[0].value === valu ) {
	    									// radio[0].checked = 'checked';
	    									app.click( radio[0] );
	    									added++;
	    								}
	    								else if( radio[1].value === valu ) {
	    									// radio[1].checked = 'checked';
	    									app.click( radio[1] );
	    									added++;
	    								}
    									else if( radio[2] && radio[2].value === valu ) {
	    									// radio[1].checked = 'checked';
	    									app.click( radio[1] );
	    									added++;
	    								}
	    							}
	    							// check for input
	    							else if( input.length > 0 && input[0].value === '') {
	    								added += simulateClick( input[0], valu, 'input' );
	    							}
	    							// check for select
	    							else if( select.length > 0 && select[0].value === '') {
	    								added += simulateClick( select[0], valu, 'select' );
	    							}

	    						}
	    					}
	    				}
		    		}
		    	}
	    	}
	    }
	    return ( total === added );
    };
    // set my network contacts
    var myNetworkContacts = function(){
    	if( app.debug ) debugger;
    	// check if did click
    	if( !isContactPage ) {
    		// set is loading
    		isContactPage = true;
    		// set speed
    		let speed = 2000;
    		// set options
    		let options = {

    		};
    		// set scope
    		let scope = document;
    		// wait for a second
    		app.loadIframes(['https://www.linkedin.com/mynetwork/contacts/'], ( frame ) => {
    			if( app.debug ) debugger;
    			// show or hide iframe if debugging
    			// frame.iframe.style.display = ( app.debug ) ? 'block' : 'none';
    			// set get wrapper
    			app.whenFound( '.mn-contacts__wrapper', frame.document, ( wrapper ) => {
    				if( app.debug ) debugger;
	    			// check for wrapper
	    			if( wrapper.length > 0 ) {
	    				// set repeat
	    				let repeat = 99999;
	    				let speed = 500;
	    				let lastItem = app.query( '.mn-contact-item:last-child', frame.document, wrapper );
	    				// scroll contacts box
	    				app.scrollToTheEnd( lastItem, repeat, speed, ( scrolled ) => {
	    					if( app.debug ) debugger;
	    					console.log( scrolled );
	    				} );
	    			}
    			} );
	    	}, options, scope );
	    }
    };
    // click quick apply
    var clickEasyApply = function(){
    	if( app.debug ) debugger;
    	// check if did click
    	if( !didClick && !isLoading ) {
    		// set is loading
    		isLoading = true;
    		// set speed
    		let speed = 2000;
    		// wait for a second
    		window.setTimeout( () => {
    			if( app.debug ) debugger;
    			// set next page
    			nextPage = false;
	    		// set quick apply
		    	let easyApply = app.query('.jobs-apply-button.artdeco-button--primary');
		    	// check if button exists
		    	if( easyApply.length > 0 ) {
		    		// check for easy apply
		    		if( (easyApply[0].innerText+'').indexOf('Easy') !== -1 ) {
			    		// set click on quick apply
			    		app.click( easyApply[0] );
			    		// set did click
			    		didClick = true;
			    	}
		    	}
	    		// wait for a second
	    		window.setTimeout( () => {
	    			if( app.debug ) debugger;
	    			// check if did click
	    			if( didClick ) {
	    				// set apply to job
	    				applyToJob();
	    			} else {
	    				clickNextItem();
	    			}
	    			// set is loading
	    			isLoading = false;
	    		}, (speed/2) );
	    	}, speed )
	    }
    };
    // click modal button
    var clickModalButton = function(){
    	if( app.debug ) debugger;
    	// set click
    	var clicked = false;
    	// set section elements
    	let primaryButton = app.query('footer .artdeco-button--primary');
    	let secondaryButton = app.query('footer.artdeco-button--secondary');
    	let dismissButton = app.query('#artdeco-modal-outlet .artdeco-modal__dismiss');
    	//check for button
    	if( primaryButton.length > 0 && modalClicks < 50 ) {
    		// check if no modal
    		if( !clickModal ) { 
	    		// set deferred
	    		clickModal = app.deferred(500);
	    		// check for empty fields
	    		if( !hasEmptyFields() ) {
	    			// wait before clicking next
	    			window.setTimeout( () => {
	    				if( app.debug ) debugger;
	    				// click next primary button
	    				clickModal.resolve();
	    				modalClicks++;
	    			},1000)
	    		} else {
	    			clickModal.resolve();
	    			clicked = app.click( primaryButton[0] );
	    		}
	    		clickModal.done( () => {
	    			if( app.debug ) debugger;
	    			// set click on modla
	    			clicked = app.click( primaryButton[0] );
			    	// check for elements
			    	window.setTimeout( () => {
			    		if( app.debug ) debugger;
			    		// set to false
			    		clickModal = false;
			    		// check for elements
			    		let sectionElements = app.query('.jobs-easy-apply-form-section__element');
			    		// check size
				    	if( sectionElements.length > 0 ) {
				    		//set prefill
				    		prefillSections();
				    	}
			    	},1000);
			    } );
			}
    	}
    	else if( secondaryButton.length > 0 ) {
    		// click the button
    		clicked = app.click( secondaryButton[0] );
    		modalClicks = 0;
    	}
    	else if( dismissButton.length > 0 ) {
    		clicked = app.click( dismissButton[0] );
    		window.setTimeout( () => {
    			let confirmButton = app.query('.artdeco-modal__confirm-dialog-btn,.artdeco-modal-outlet > div > button');
    			if( confirmButton && confirmButton.length > 0 ) {
    				clicked = app.click( confirmButton[0] );
    			}
    		},1000);
    		modalClicks = 0;
    	}
    	return clicked;
    };
    //click next item
    var clickNextItem = function(){
    	if( app.debug ) debugger;
    	// do nothing if next page
    	if( nextPage ) return false;
    	// get list item
    	let nextItem = false;
    	let listItems = getListItems();
    	let listPages = getPageItems();
    	let activeItem = getActiveItem();
    	let activePage = getActivePage();
    	// check for active item
    	if( activeItem && activeItem.length > 0 ) {
    		// look in list items
    		for(var i=0; i < listItems.length;i++ ) {
    			// check for active item
    			if( listItems[i].className.indexOf('-active') !== -1 && !nextPage ) {
    				// check if next item exists
    				if( listItems[ (i+1) ] && listItems[ (i+1) ].title !== 'next' ) {
    					nextItem = listItems[ (i+1) ];
    					nextItem.title = 'next';
    					app.click( nextItem );
    					nextItem.scrollIntoView(true);
    					break;
    				} else {
    					// set item
    					let item = activePage[0];
    					// check item
    					if( item ) {
	    					let span = item.querySelector('span');
	    					// click next page
	    					nextPage = clickNextPage( span.innerText );
	    				}
    				}
    			}
    		}
    	} else {
    		// check for list item
    		if( listItems[0] ) {
    			listItems[0].scrollIntoView(true);
    			app.click( listItems[0] );
    		}
    	}
    	return {
    		list: {
    			items: listItems,
    			pages: listPages,
    		},
    		next: {
    			item: nextItem,
    			page: nextPage
    		},
    		active: {
    			item: activeItem,
    			page: activePage
    		}
    	};
    };
    // click next page
    var clickNextPage = function( pageNumber ){
    	if( app.debug ) debugger;
    	// get list item
    	let listPages = getPageItems();
    	let next = ((parseInt( pageNumber ) + 1)+'');
    	// check for active item
    	if( listPages && listPages.length > 1 ) {
    		// loop in list pages
    		for(var i=0; i < listPages.length;i++ ) {
    			// set item
    			let item = listPages[i];
    			// check for item
    			if( item ) {
	    			// get item
	    			let span = item.querySelector('span');
	    			// set text
	    			let text = span.innerText;
	    			// check for active item
	    			if( text === next || text === '…' ) {
	    				app.click( item );
	    				nextPage = item;
	    				break;
	    			}
	    		}
    		}
    	}
    	return nextPage;
    };
    // apply to job process
    var applyToJob = function(){
    	if( app.debug ) debugger;
    	// check for buttons
    	let speed = 1000;
    	let check = app.deferred(speed);
    	// look at progress
    	check.progress( () => {
    		// check if has overlay
    		if( hasOverlay() ) {
	    		// check for button
	    		clickModalButton();
	    	} else {
    			// check if done
    			check.resolve();
    		}
    	});
    	check.done( () => {
    		// save applied to
    		saveAppliedTo();
    		// set did click
    		didClick = false;
    	});
    	return check;
    };
    // set debug flat
    app.debug = false;
    // bind to window
    window.app = app;
    //set global count
    var version = 1;
    var pages = 0;
    var globalCount = 0;
    var AdlistTotal = 0;
    var totalSent = 0;
    var isOpening = false;
    var isProcessing = false;
    var isCollecting = false;
    var startMessenger = false;
    var isContactPage = false;
    var isContactsSaved = false;
    //set window objects
    window.stopLooking = false;
    window.isPause = false;
    //set group id
    var href = document.location.href;
    // set object names
    var eaPage = 'EasyApplyPage';
    //get main objects
    loadObject( eaPage, false );
    //get next group index
    var EasyApplyPage = window[ eaPage ];
    // set pulse
    var pulseSpeed = 100;
    // set pulse
    var pulse = app.deferred( pulseSpeed );
    // set progress
    pulse.progress(function( count ){
    	// check if not click
    	if( !didClick ) {
    		clickEasyApply();
    	}
    	if( !isContactsSaved ) {
    		// myNetworkContacts();
    	}
    });

};