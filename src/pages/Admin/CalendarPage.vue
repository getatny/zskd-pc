<template>
  <div id="calendar">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <p class="category">集中展示近期校级宣讲会、双选会日程</p>
          </md-card-header>
          <md-card-content>
            <full-calendar :events="calendarEvents" :config="calendarConfig"
                           @event-created="openCreateEventWindow"
                           @event-drop="existEventChange"
                           @event-selected="eventSelect"/>
          </md-card-content>
        </md-card>
      </div>
    </div>

    <Modal v-model="showCreateEventWindow" title="添加日程" class-name="vertical-center-modal"
           @on-cancel="cancelCreateEvent" @on-ok="createEvent">
      <Form ref="createForm" v-model="createEventData" label-position="top">
        <FormItem label="日程标题" prop="event-title">
          <Input v-model="createEventData.title"/>
        </FormItem>

        <Row :gutter="15">
          <Col span="12">
            <FormItem label="时段" prop="event-time">
              <Select v-model="createEventData.eventTimeFlag">
                <Option value="allDay">全天</Option>
                <Option value="allAM">一上午</Option>
                <Option value="allPM">一下午</Option>
                <Option value="one">1-2小节</Option>
                <Option value="two">3-4小节</Option>
                <Option value="three">5-6小节</Option>
                <Option value="four">7-8小节</Option>
                <Option value="five">9-12小节</Option>
              </Select>
            </FormItem>
          </Col>
          <Col span="12">
            <FormItem label="日程颜色" prop="event-color">
              <Select v-model="createEventData.className">
                <Option value="event-grey" label="灰色">
                  <span>灰色</span>
                  <span style="float:right;width:15px;height:15px;background:#999"></span>
                </Option>
                <Option value="event-orange" label="橙色">
                  <span>橙色</span>
                  <span style="float:right;width:15px;height:15px;background:#ff9800"></span>
                </Option>
                <Option value="event-green" label="绿色">
                  <span>绿色</span>
                  <span style="float:right;width:15px;height:15px;background:#4caf50"></span>
                </Option>
                <Option value="event-blue" label="蓝色">
                  <span>蓝色</span>
                  <span style="float:right;width:15px;height:15px;background:#00dcb4"></span>
                </Option>
                <Option value="event-red" label="红色">
                  <span>红色</span>
                  <span style="float:right;width:15px;height:15px;background:#f44336"></span>
                </Option>
                <Option value="event-rose" label="玫色">
                  <span>玫色</span>
                  <span style="float:right;width:15px;height:15px;background:#e91e63"></span>
                </Option>
              </Select>
            </FormItem>
          </Col>
        </Row>
      </Form>
    </Modal>
  </div>
</template>

<script>
  import { FullCalendar } from 'vue-full-calendar'
  import 'fullcalendar/dist/fullcalendar.css'
  import 'fullcalendar/dist/locale/zh-cn'

  export default {
    name: 'Calendar',
    components: {
      FullCalendar
    },
    data () {
      return {
        calendarConfig: {
          defaultView: 'month',
          locale: 'zh-cn',
          eventLimit: true,
          views: {
            month: {
              eventLimit: 4
            }
          },
          editable: false
        },
        calendarEvents: {
          events: [
            {
              title: '测试日程',
              start: '2018-10-22',
              end: '2018-10-23',
              className: 'event-orange'
            }
          ],
          textColor: '#fff'
        },
        showCreateEventWindow: false,
        createEventData: {
          title: null,
          start: null,
          allDay: null,
          className: "event-grey",
          eventTimeFlag: 'allDay'
        }
      }
    },
    methods: {
      createEvent() {
        let time = this.createEventData.eventTimeFlag

        if (time === 'allDay') {
          this.createEventData.allDay = true
        } else if (time === 'allAM') {
          this.createEventData.end = this.createEventData.start + "T11:40:00"
          this.createEventData.start = this.createEventData.start + "T08:00:00"
        } else if (time === 'allPM') {
          this.createEventData.end = this.createEventData.start + "T17:10:00"
          this.createEventData.start = this.createEventData.start + "T13:30:00"
        } else if (time === 'one') {
          this.createEventData.end = this.createEventData.start + "T09:35:00"
          this.createEventData.start = this.createEventData.start + "T08:00:00"
        } else if (time === 'two') {
          this.createEventData.end = this.createEventData.start + "T11:40:00"
          this.createEventData.start = this.createEventData.start + "T10:05:00"
        } else if (time === 'three') {
          this.createEventData.end = this.createEventData.start + "T15:05:00"
          this.createEventData.start = this.createEventData.start + "T13:30:00"
        } else if (time === 'four') {
          this.createEventData.end = this.createEventData.start + "T17:10:00"
          this.createEventData.start = this.createEventData.start + "T15:35:00"
        } else if (time === 'five') {
          this.createEventData.end = this.createEventData.start + "T21:30:00"
          this.createEventData.start = this.createEventData.start + "T18:00:00"
        }

        this.calendarEvents.events.push(
          JSON.parse(JSON.stringify(this.createEventData))
        )
        this.clearCreateEventForm()
      },
      clearCreateEventForm() {
        this.createEventData.title = null
        this.createEventData.start = null
        this.createEventData.allDay = null
        this.createEventData.className = "event-grey"
      },
      cancelCreateEvent() {
        this.showCreateEventWindow = false
        this.clearCreateEventForm()
      },
      openCreateEventWindow(event) {
        this.createEventData.start = event.start.format()
        this.createEventData.end = event.end.format()
        this.showCreateEventWindow = true
      },
      existEventChange() {

      },
      eventSelect(event) {
        let timeArea = ""

        if (event.allDay === true) {
          timeArea = "时段：全天"
        } else {
          let startTime = event.start.hour()
          let endTime = event.end.hour()

          if (startTime === 8) {
            if (endTime === 11) {
              timeArea = "时段：一上午"
            } else {
              timeArea = "时段：1-2小节"
            }
          } else if (startTime === 10) {
            timeArea = "时段：3-4小节"
          } else if (startTime === 13) {
            if (endTime === 17) {
              timeArea = "时段：一下午"
            } else if (endTime === 15) {
              timeArea = "时段：5-6小节"
            }
          } else if (startTime ===15) {
            timeArea = "时段：7-8小节"
          } else if (startTime === 18) {
            timeArea = "时段：9-12小节"
          }
        }

        this.$Modal.info({
          title: event.title,
          content: "<p style='margin-top: 20px'>开始日期：" + event.start.stripTime().format()
            + "</p><p>结束日期：" + event.end.stripTime().format() + "</p>" + timeArea
        })
      }
    }
  }
</script>

<style lang="stylus">
  .fc-event {
    position: relative;
    display: block;
    font-size: .85em;
    line-height: 1.3;
    border-radius: 2px;
    background-color: #4caf50;
    box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(76,175,80,.4);
    font-weight: 400;
    border: none

    &:hover {
      color: #fff!important
    }

    &.event-orange {
      background-color: #ff9800;
      box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(255,152,0,.4);
    }

    &.event-green {
      background-color: #4caf50;
      box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(76,175,80,.4);
    }

    &.event-grey {
      background-color: #999;
      box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(153,153,153,.4);
    }

    &.event-rose {
      background-color: #e91e63;
      box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(233,30,99,.4);
    }

    &.event-blue {
      background-color: #00bcd4;
      box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(0,188,212,.4);
    }

    &.event-red {
      background-color: #f44336;
      box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(244,67,54,.4);
    }
  }

  .vertical-center-modal{
    display: flex;
    align-items: center;
    justify-content: center;

    .ivu-modal{
      top: 0;
    }
  }
</style>
