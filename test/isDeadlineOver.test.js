import { isDeadlineOver } from '../index'

const first_correct_old = '1991-01-19'
const first_correct_new = '2991-01-19'
const first_incorrect_new = '2022-1-19'

const second_correct = '18:10'
const second_incorrect = '8:10'

const third_correct = 8.02
const third_incorrect = 16

describe('zero argument', () => {
  it('argument is empty', () => {
    expect(() => isDeadlineOver()).toThrowError('The isDeadlineOver function require at least 1 parameter')
  })
})

describe('one argument', () => {
  it(`1st argument's format is correct`, () => {
    const oldcampaign = isDeadlineOver(first_correct_old)
    expect(oldcampaign).toBeTruthy()

    const newcampaign = isDeadlineOver(first_correct_new)
    expect(newcampaign).toBeFalsy()
  })
  it(`1st argument's format is incorrect`, () => {
    expect(() => isDeadlineOver(first_incorrect_new)).toThrowError('Please follow the format, e.g. 2022-03-04')
  })
})

describe('two argument', () => {
  it(`1st argument's format is correct, 2nd argument's format is correct`, () => {
    const oldcampaign = isDeadlineOver(first_correct_old, second_correct)
    expect(oldcampaign).toBeTruthy()

    const newcampaign = isDeadlineOver(first_correct_new, second_correct)
    expect(newcampaign).toBeFalsy()
  })
  it(`1st argument's format is correct, 2nd argument's format is incorrect`, () => {
    expect(() => isDeadlineOver(first_correct_new, second_incorrect)).toThrowError('Please follow the format, e.g. 05:07')
  })
  it(`1st argument's format is incorrect, 2nd argument's format is incorrect`, () => {
    expect(() => isDeadlineOver(first_incorrect_new, second_incorrect)).toThrowError('Please follow the format, e.g. 2022-03-04')
  })
})

describe('three argument', () => {
  it('all format is filled and correct', () => {
    const oldcampaign = isDeadlineOver(first_correct_old, second_correct, third_correct)
    expect(oldcampaign).toBeTruthy()

    const newcampaign = isDeadlineOver(first_correct_new, second_correct, third_correct)
    expect(newcampaign).toBeFalsy()
  })
  it(`1st argument's format is incorrect, whether 2nd or 3rd argument's format is correct`, () => {
    expect(() => isDeadlineOver(first_incorrect_new, second_incorrect, third_incorrect)).toThrowError('Please follow the format, e.g. 2022-03-04')
  })
  it(`2nd argument's format is incorrect, 1st argument's format is correct, whether 3rd argument's format is correct`, () => {
    expect(() => isDeadlineOver(first_correct_new, second_incorrect, third_incorrect)).toThrowError('Please follow the format, e.g. 05:07')
  })
  it(`3rd argument's format is incorrect, and 2nd or 3rd argument's format is correct`, () => {
    expect(() => isDeadlineOver(first_correct_new, second_correct, third_incorrect)).toThrowError('Please check your input is lower than 16 and greater than -16')
  })
  it(`All argument's format is incorrect`, () => {
    expect(() => isDeadlineOver(first_incorrect_new, second_incorrect, third_incorrect)).toThrowError('Please follow the format, e.g. 2022-03-04')
  })
})