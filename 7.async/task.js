"use strict";

class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (time === null || callback === undefined) {
      throw new Error("Отсутствуют обязательные аргументы");
    }

    const alarm = this.alarmCollection.find((item) => item.time === time);
    if (alarm) {
      console.warn("Уже присутствует звонок на это же время");
    }

    this.alarmCollection.push({
      callback,
      time,
      canCall: true,
    });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      (item) => item.time !== time
    );
  }

  getCurrentFormattedTime() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    if (hours < 10) {
      hours = "0" + hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    const result = `${hours}:${minutes}`;

    return result;
  }

  start() {
    if (this.intervalId !== null) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((item) => {
        if (
          item.time === this.getCurrentFormattedTime() &&
          item.canCall === true
        ) {
          item.canCall = false;
          item.callback();
        }
      });
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((item) => (item.canCall = true));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
