<template>
  <div id="calendar">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <p class="category">集中展示近期校级宣讲会、双选会日程</p>
          </md-card-header>
          <md-card-content>
            <full-calendar :events="calendarEvents" :config="calendarConfig" @event-created="showCreateEventWindow = true" />
          </md-card-content>
        </md-card>
      </div>
    </div>

    <md-dialog :md-active.sync="showCreateEventWindow">
      <md-dialog-title>添加日程</md-dialog-title>

      <md-dialog-content>
        <form class="md-layout">
          <div class="md-layout">
            <div class="md-layout-item md-size-200">
              <md-field :class="{'md-invalid': !createValid.title}">
                <label for="event-title">日程标题</label>
                <md-input name="eventTitle" id="event-title" v-model="createEventData.title" :disabled="creating"/>
                <span class="md-error" v-if="!createValid.title">日程标题必须输入</span>
              </md-field>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-200">
              <md-field :class="{'md-invalid': !createValid.start}">
                <label for="event-start">日程开始日期</label>
                <md-input id="event-start" v-model="createEventData.start" :disabled="creating" ref="startTime"/>
                <span class="md-error" v-if="!createValid.start">日程开始日期必须输入</span>
              </md-field>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-200">
            <md-field>
              <label for="event-time">具体时间</label>
                <md-select name="eventTime" id="event-time" ref="time">
                  <md-option value="allDay">全天</md-option>
                  <md-option value="allAM">一上午</md-option>
                  <md-option value="allPM">一下午</md-option>
                  <md-option value="one">1-2节</md-option>
                  <md-option value="two">3-4节</md-option>
                  <md-option value="three">5-6节</md-option>
                  <md-option value="four">7-8节</md-option>
                  <md-option value="five">9-11节</md-option>
                </md-select>
              </md-field>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-xsmall-100">
              <md-field>
                <label for="event-color">日程颜色</label>
                <md-select v-model="createEventData.className" name="eventColor" id="event-color">
                  <md-option value="event-greydefault">默认（灰色）</md-option>
                  <md-option value="event-red">红色</md-option>
                  <md-option value="event-rose">玫色</md-option>
                  <md-option value="event-green">绿色</md-option>
                  <md-option value="event-blue">蓝色</md-option>
                  <md-option value="event-orange">橙色</md-option>
                </md-select>
              </md-field>
            </div>
          </div>
        </form>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-simple" @click="showCreateEventWindow = false">取消</md-button>
        <md-button class="md-success" @click="createEvent">保存</md-button>
      </md-dialog-actions>
    </md-dialog>
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
          locale: 'zh-cn'
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
          className: null
        },
        createValid: {
          // true表示验证通过
          title: true,
          start: true
        },
        creating: false
      }
    },
    methods: {
      createEvent() {
        this.calendarEvents.events.push(this.createEventData)
        this.clearCreateEventForm()
      },
      clearCreateEventForm() {
        this.createEventData.title = null
        this.createEventData.start = null
        this.createEventData.allDay = null
        this.createEventData.className = null
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
</style>
