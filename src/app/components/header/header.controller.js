/* eslint-disable no-console */
'use strict';

export default class HeaderController{
    constructor ($rootScope) {
        'ngInject';   

        this.menu = [
            { name: 'Sign in', link: 'sign-in' }, 
            { name: 'Sign up', link: 'sign-up' }
        ];
        
        if ($rootScope.currentUser) {
            this.currentUser = $rootScope.currentUser;
        }

        $rootScope.$watch('currentUser', currentUser => {
            this.currentUser = currentUser;

            if (this.currentUser) {
                this.currentUser.role = 'user'; // it's a mock 
                this.menuShow();
            }
        });
    }

    menuShow() {
        if (this.currentUser.role === 'user') {
            console.log(this.currentUser.firstName);
            console.log(this.currentUser.lastName);
            this.menu = [
                { name: 'Home', link: 'home' }, 
                { name: 'Converter', link: 'converter' } 
            ];
        } else if (this.currentUser.role === 'admin') {
            this.menu = [
                { name: 'Home', link: 'home' }, 
                { name: 'Converter', link: 'converter' },
                { name: 'Admin', link: 'admin' } 
            ];
        }
    } 
}