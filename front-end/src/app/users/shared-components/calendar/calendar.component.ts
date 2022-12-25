import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CalendarOptions, DateSelectArg, EventClickArg, EventApi, EventInput} from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import {planingService} from "../../../shared-service/PlaningService/Planing.service";
import {type} from "os";
import {planing} from "../../../model/planing";
import * as events from "events";
import {EventService} from "../../../shared-service/EventsService/event.service";
import {EventsModel} from "../../../model/EventsModel";
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Suivis} from "../../../model/Suivis";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  listEvent!:any
  calendarOptions!: CalendarOptions;
  closeResult = '';
  @ViewChild('content') mymodal: ElementRef | undefined;
  titleEvent :any;
  startEvents :any;
  endEvents :any;





  constructor(private planingService : planingService,private eventService : EventService ,private modalService: NgbModal) {


  }

  /*Modal----------------------------*/
  open(content:any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  /*Modal----------------------------------*/






  calendarVisible = true;

  ngOnInit() {
    this.eventService.getEventByEntr().subscribe((data) => {
        this.listEvent=data
       //console.log(data)

      this.calendarOptions = {
        //events: 'http://localhost:8080/events/afficheEventsByEntr',
        eventSources: data,
        eventBackgroundColor:'black',
        // eventSources: [
        //   // your event source
        //   {
        //     url: '/http://localhost:8080/events/afficheEventsByEntr',
        //     color: 'yellow',   // a non-ajax option
        //     textColor: 'black' // a non-ajax option
        //   }
        //
        //   // any other sources...
        //
        // ],
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        initialView: 'dayGridMonth',
        initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
        weekends: true,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        select: this.handleDateSelect.bind(this),
        eventClick: this.handleEventClick.bind(this),
        eventsSet: this.handleEvents.bind(this),
        themeSystem: 'Solar'
        /* you can update a remote database when these fire:
        eventChange:
        eventRemove:
        eventAdd:
         */
      };
        console.log(this.listEvent)
       console.log(EventSource);
    });
    // for (let dayPlanings of this.listPlaning){
    //   this.datePlaning = dayPlanings.CoachingDate;
    //   this.titreDisc = dayPlanings.discipline;
    //   console.log(this.titreDisc)
    //   console.log(this.datePlaning)
    //
    //   this.planingEvents.CoachingDate =  dayPlanings.CoachingDate;
    //   this.planingEvents.discipline = dayPlanings.discipline;
    //    let formData = new FormData();
    //   formData.set('title',this.titreDisc);
    //    formData.set('date',this.datePlaning);
    //    //console.log(formData.get('title'))
    //
    //   //this.formData.s('date',this.datePlaning)
    //   //console.log(typeof this.datePlaning)
    // }
    // console.log(this)
    // });
    // this.Events.push(this.planingEvents);
    // //console.log(this.datePlaning)
  }

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {

    //const startDate = prompt('please enter a start date');
    this.open(this.mymodal)
    const title = this.titleEvent?.value;
    const dateDebut = this.startEvents?.value;
    const dateFin = this.endEvents?.value;
    //const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title:title,
        start: dateDebut,
        end: dateFin,
        allDay: selectInfo.allDay
      });

       // const dateStart = new Date(this.startEvents?.value)

    }
  }

  addEvent (){
    this.titleEvent = (<HTMLInputElement>document.getElementById("title")).value;
    this.startEvents = (<HTMLInputElement>document.getElementById("title")).value;
    this.endEvents = (<HTMLInputElement>document.getElementById("title")).value;

    const title = this.titleEvent;
    const dateDebut = this.startEvents;
    const dateFin = this.endEvents;
    console.log(title)
    const eventModule = new EventsModel();
    eventModule.title=title;
    eventModule.start = dateDebut;
    eventModule.end = dateFin;
    this.eventService.createEvent(eventModule).subscribe()
  }

  handleEventClick(clickInfo: EventClickArg) {
    this.eventService.getEventToDelete().subscribe((data) => {
     this.listEvent=data.events;
      // const ids = data.map((obj:EventsModel) => obj.id);
      console.log(data.events)
      if (confirm(`Tu est Sure ? Supprimer cette Evenement ! '${clickInfo.event.title}'`)) {
        clickInfo.event.remove();
        this.eventService.deleteEvents(this.listEvent.id).subscribe();
      }
    });
  }

  handleEvents(events: EventApi[]) {
  }


}
