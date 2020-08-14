import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute} from "@angular/router";
import {ActivitiesService} from "../../services/activities/activities.service";
import {FilterPipe} from "../../pipes/filter.pipe";

@Component({
    selector: 'app-manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

    user: any;
    loading: boolean;
    f: { date: Date };
    private archive: any[];
    users: any[];
    groups: any[];
    activities: any[];

    sortTypeActivities = 'id';
    sortReverseActivities = false;
    searchQueryActivities = "";

    sortTypeUsers = 'id';
    sortReverseUsers = false;
    searchQueryUsers = "";

    sortTypeGroups = 'id';
    sortReverseGroups = false;
    searchQueryGroups = "";

    private datepicker: { open: boolean };

    dateOptions = {
        formatYear: 'yy',
        maxDate: new Date().setFullYear(new Date().getFullYear() + 10), // maximum date for datepicker
        minDate: new Date(), // minimum date for datepicker
        startingDay: 1
    };

    constructor(private activatedRoute: ActivatedRoute,
                public authService: AuthService,
                private activitiesService: ActivitiesService,
                private filterPipe: FilterPipe) {
        this.loading = true;
        this.f = {
            date: new Date()
        };

        // Variables for tracking search & sorting in activities tab
        this.sortTypeActivities = 'id';
        this.sortReverseActivities = false;

        // Variables for tracking search & sorting in users tab
        this.sortTypeUsers = 'id';
        this.sortReverseUsers = false;

        // Variables for tracking search & sorting in groups tab
        this.sortTypeGroups = 'id';
        this.sortReverseGroups = false;

        this.datepicker = {open: false};
    }

    ngOnInit(): void {
        this.authService.user.subscribe(user => {
            this.user = user;

            this.archive = this.activatedRoute.snapshot.data.allActivities;

            if (this.user.isAdmin) {
                this.users = this.activatedRoute.snapshot.data.allUsers;
                this.groups = this.activatedRoute.snapshot.data.allGroups;
            }

            this.filter();

            this.loading = false;
        });
    }

    // Allow toggling the 'published' attribute of activities
    togglePublishedActivity(activityToBeToggled) {
        activityToBeToggled.published = !activityToBeToggled.published;
        activityToBeToggled.organizer = activityToBeToggled.Organizer.displayName;
        this.activitiesService.edit(activityToBeToggled, true, null).subscribe(res => {
            return;
        });
    }

    // $scope.$watch("f.date", function (newDate) {
    //     $scope.filter();
    // });

    filter() {
        const date = this.f.date;
        date.setDate(date.getDate() - 1);
        this.activities = [];
        for (const activity of this.archive) {
            if (activity.date >= date) {
                this.activities.push(activity);
            }
        }
    }

    // Ugly repeated code
    sortActivities(type) {
        if (this.sortTypeActivities === type) {
            this.sortReverseActivities = !this.sortReverseActivities;
        } else {
            this.sortReverseActivities = false;
        }
        this.sortTypeActivities = type;
    }

    sortUsers(type) {
        if (this.sortTypeUsers === type) {
            this.sortReverseUsers = !this.sortReverseUsers;
        } else {
            this.sortReverseUsers = false;
        }
        this.sortTypeUsers = type;
    }

    sortGroups(type) {
        if (this.sortTypeGroups === type) {
            this.sortReverseGroups = !this.sortReverseGroups;
        } else {
            this.sortReverseGroups = false;
        }
        this.sortTypeGroups = type;
    }

    activityCallback(activity, query) {
        return activity.Organizer.displayName.toLowerCase().includes(query.toLowerCase())
            || activity.name.toLowerCase().includes(query.toLowerCase());
    }

    userCallback(user, query) {
        return user.email.toLowerCase().includes(query.toLowerCase())
            || user.displayName.toLowerCase().includes(query.toLowerCase());
    }

    groupCallback(group, query) {
        return group.fullName.toLowerCase().includes(query.toLowerCase())
            || group.email.toLowerCase().includes(query.toLowerCase());
    }

    // function for using datepicker in form for creating activities
    openDatePicker() {
        this.datepicker.open = true;
    }
}
