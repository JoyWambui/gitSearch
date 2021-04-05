export class RepoList {
  constructor(
    public usersName:string,
    public avatar: string,
    public repoName: string,
    public repoLink: string,
    public description: string,
    public language: string,
    public fork: number,
    public createdDate: Date,
    public updatedDate: Date
  )
  {}
}
