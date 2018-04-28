export class Team {
  constructor(
    public Name: string,
    public Id: number,
    public FixtureId: number
  ) {}
}

export class Match {
  constructor(
    public Team1: Team,
    public Team2: Team
  ) {}
}

export class Date {
    constructor(
      public Matches: Match[]
    ) {}
}

export class Fixture {
  constructor(
    public Dates: Date[],
    public MatchesPerDate: Number
  ) {}
}
