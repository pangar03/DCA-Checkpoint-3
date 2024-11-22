export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  screen: string;
  events: any[];
  isAdmin: boolean;
};

export enum Actions {
  'NAVIGATE' = 'NAVIGATE',
  'GETEVENTS' = 'GETEVENTS',
  'ADDEVENT' = 'ADDEVENT',
  'DELETEEVENT' = 'DELETEEVENT',
  'CHANGEADMIN' = 'CHANGEADMIN',
  'ADDATTENDEE' = 'ADDATTENDEE',
};

export enum Screens {
  'DASHBOARDADMIN' = 'DASHBOARDADMIN',
  'DASHBOARDUSER' = 'DASHBOARDUSER',
};