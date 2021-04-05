export class UserProfile {
  constructor(
  public avatar: string,
  public name: string,
  public bio: string,
  public repos: number,
  public followers: number,
  public following: number,
  public created : Date)  {}
}
