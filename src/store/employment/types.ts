export interface EmploymentState {
    activeTags: String[];
    tags: Object;
    employments: Object[]
}

export interface EmploymentItem {
    title: String;
    company: String;
    companyUrl: String;
    dates: Moment[][],
    summary: String;
    tags: String[];
}