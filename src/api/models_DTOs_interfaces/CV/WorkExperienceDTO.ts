

export class PublicWorkExperience {

  title: string
  startDate: string | Date
  endDate: string | Date
  type: string

  constructor(title: string, startDate: string | Date, endDate: string | Date, type: string) {

    this.title = title,
      this.startDate = startDate,
      this.endDate = endDate,
      this.type = type

  }


}