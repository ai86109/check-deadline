import moment from 'moment'

function isDeadlineOver(date, time = '23:59', timezone = 8) {
  const regex_date = new RegExp(/^(000[0-9]|00[1-9][0-9]|0[1-9][0-9][0-9]|[1-9][0-9][0-9][0-9])-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/)
  const regex_time = new RegExp(/^([0-1][0-9]|2[0-3]):([0-4][0-9]|5[0-9])$/)
  const regex_timezone = new RegExp(/^(-?(([0-9]|1[0-5])|([0-9]\.[0-9]*[1-9][0-9]*)|(1[0-5]\.[0-9]*[1-9][0-9]*)|([0-9]\.[0-9]*)|(1[0-5]\.[0-9]*)))$/)

  if(arguments.length < 1) throw new Error('The isDeadlineOver function require at least 1 parameter')
  if(!regex_date.test(date)) throw new Error('Please follow the format, e.g. 2022-03-04')
  if(!regex_time.test(time)) throw new Error('Please follow the format, e.g. 05:07')
  if(!regex_timezone.test(timezone)) throw new Error('Please check your input is between 16 and -16')

  const deadline = date + 'T' + time
  const cuttent_time = moment().utcOffset(timezone).format('YYYY-MM-DDTHH:mm')
  return moment(cuttent_time).isAfter(deadline)
}

export { isDeadlineOver }