'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">gymbox documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-4f578f48f4406b99a433889097351a306cd786e1f5d2d6286e21e3d2de71fefab464afb6efca8ed096ad9a8fdba90debb7fa008864bf380f07cbe2a06107b74b"' : 'data-target="#xs-components-links-module-AppModule-4f578f48f4406b99a433889097351a306cd786e1f5d2d6286e21e3d2de71fefab464afb6efca8ed096ad9a8fdba90debb7fa008864bf380f07cbe2a06107b74b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-4f578f48f4406b99a433889097351a306cd786e1f5d2d6286e21e3d2de71fefab464afb6efca8ed096ad9a8fdba90debb7fa008864bf380f07cbe2a06107b74b"' :
                                            'id="xs-components-links-module-AppModule-4f578f48f4406b99a433889097351a306cd786e1f5d2d6286e21e3d2de71fefab464afb6efca8ed096ad9a8fdba90debb7fa008864bf380f07cbe2a06107b74b"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BlindsHelpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BlindsHelpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookGymComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookGymComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookTrainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookTrainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookingCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookingCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClimateHelpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClimateHelpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DoorHelpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DoorHelpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GymCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GymCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HelpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconListItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconListItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfobannerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InfobannerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LightsHelpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LightsHelpComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MatAccordionResponsiveComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MatAccordionResponsiveComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MatSqButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MatSqButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MediacontrolComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MediacontrolComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RoomComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RoomComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SocialComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SocialComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TaskComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TaskListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrainerCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrainerCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WelcomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WelcomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorkoutToolsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkoutToolsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/BaseComponent.html" data-type="entity-link" >BaseComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ButtonComponent.html" data-type="entity-link" >ButtonComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent.html" data-type="entity-link" >HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PageComponent.html" data-type="entity-link" >PageComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CustomValidators.html" data-type="entity-link" >CustomValidators</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApiService.html" data-type="entity-link" >ApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link" >DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TimerService.html" data-type="entity-link" >TimerService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Chainable.html" data-type="entity-link" >Chainable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Gym.html" data-type="entity-link" >Gym</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Observable.html" data-type="entity-link" >Observable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Task.html" data-type="entity-link" >Task</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});