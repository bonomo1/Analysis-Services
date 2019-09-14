import { ComparisonNode } from '../model/comparison-node';
import { fail } from 'assert';


export const DatabaseSourceData: ComparisonNode[] = [
  {
    'Id': 1,
    'NodeType': 'Data Source',
    'ParentId': null,
    'SourceName': 'SqlServer MAQ40883SQLEXPRESS TestDB',
    'TargetName': null,
    'SourceInternalName': 'SqlServer MAQ40883SQLEXPRESS TestDB',
    'TargetInternalName': null,
    'Level': 0,
    'Status': 'Missing in Target',
    'MergeAction': 'Create',
    'SourceObjectDefinition': 'DataSource TestDB',
    'TargetObjectDefinition': 'DataSource TestDB to be created',
    'ChildNodes': [2, 3, 4, 7],
    'AvailableActions': ['Create', 'Skip'],
    'ShowNode': true,
    'DropdownDisabled': false,
    'DisableMessage': ''
  },
  {
    'Id': 2,
    'NodeType': 'Table',
    'ParentId': 1,
    'SourceName': 'Attendee',
    'TargetName': 'Attendee',
    'SourceInternalName': 'Attendee',
    'TargetInternalName': 'Attendee',
    'Level': 0,
    'Status': 'Different Definition',
    'MergeAction': 'Skip',
    'SourceObjectDefinition': 'Table Attendee',
    'TargetObjectDefinition': 'Table Attendee Edited',
    'ChildNodes': [5, 6],
    'AvailableActions': ['Update', 'Skip'],
    'ShowNode': true,
    'DropdownDisabled': false,
    'DisableMessage': ''
  },
  {
    'Id': 3,
    'NodeType': 'Table',
    'ParentId': 1,
    'SourceName': null,
    'TargetName': 'ABC',
    'SourceInternalName': null,
    'TargetInternalName': 'ABC',
    'Level': 0,
    'Status': 'Missing in Source',
    'MergeAction': 'Delete',
    'SourceObjectDefinition': null,
    'TargetObjectDefinition': 'Table ABC',
    'ChildNodes': [],
    'AvailableActions': ['Delete', 'Skip'],
    'ShowNode': true,
    'DropdownDisabled': false,
    'DisableMessage': ''
  },
  {
    'Id': 4,
    'NodeType': 'Table',
    'ParentId': 1,
    'SourceName': 'EmployeeProject',
    'TargetName': 'EmployeeProject',
    'SourceInternalName': 'EmployeeProject',
    'TargetInternalName': 'EmployeeProject',
    'Level': 0,
    'Status': 'Same Definition',
    'MergeAction': 'Skip',
    'SourceObjectDefinition': 'Employee Project',
    'TargetObjectDefinition': 'Employee Project',
    'ChildNodes': [12],
    'AvailableActions': ['Skip'],
    'ShowNode': true,
    'DropdownDisabled': true,
    'DisableMessage': ''
  },
  {
    'Id': 5,
    'NodeType': 'Relationship',
    'ParentId': 2,
    'SourceName': 'Attendee[EventId] -> Event[EventId]',
    'TargetName': 'Attendee[EventId] -> Event[EventId]',
    'SourceInternalName': 'Attendee[EventId] -> Event[EventId]',
    'TargetInternalName': 'Attendee[EventId] -> Event[EventId]',
    'Level': 1,
    'Status': 'Same Definition',
    'MergeAction': 'Skip',
    'SourceObjectDefinition': 'Attendee Relationship',
    'TargetObjectDefinition': 'Attendee Relationship',
    'ChildNodes': [],
    'AvailableActions': ['Skip'],
    'ShowNode': true,
    'DropdownDisabled': false,
    'DisableMessage': ''
  },
  {
    'Id': 6,
    'NodeType': 'KPI',
    'ParentId': 2,
    'SourceName': 'MaxAttendeeAge',
    'TargetName': 'MaxAttendeeAge',
    'SourceInternalName': 'MaxAttendeeAge',
    'TargetInternalName': 'MaxAttendeeAge',
    'Level': 1,
    'Status': 'Different Definition',
    'MergeAction': 'Update',
    'SourceObjectDefinition': 'MaxAttendeeAge Source',
    'TargetObjectDefinition': 'MaxAttendeeAge Target\nTrying with one more line',
    'ChildNodes': [],
    'AvailableActions': ['Update', 'Skip'],
    'ShowNode': true,
    'DropdownDisabled': false,
    'DisableMessage': ''
  },
  {
    'Id': 7,
    'NodeType': 'Table',
    'ParentId': 1,
    'SourceName': 'Employee',
    'TargetName': 'Employee',
    'SourceInternalName': 'Employee',
    'TargetInternalName': 'Employee',
    'Level': 0,
    'Status': 'Same Definition',
    'MergeAction': 'Skip',
    'SourceObjectDefinition': 'Employee',
    'TargetObjectDefinition': 'Employee',
    'ChildNodes': [8, 9, 10, 11],
    'AvailableActions': ['Skip'],
    'ShowNode': true,
    'DropdownDisabled': false,
    'DisableMessage': ''
  },
  {
    'Id': 8,
    'NodeType': 'Relationship',
    'ParentId': 7,
    'SourceName': 'Employee[GenderId] -> Gender[GenderId]',
    'TargetName': null,
    'SourceInternalName': 'Employee[GenderId] -> Gender[GenderId]',
    'TargetInternalName': null,
    'Level': 1,
    'Status': 'Missing in Target',
    'MergeAction': 'Create',
    'SourceObjectDefinition': 'Employee Gender Relationship',
    'TargetObjectDefinition': null,
    'ChildNodes': [],
    'AvailableActions': ['Create', 'Skip'],
    'ShowNode': true,
    'DropdownDisabled': false,
    'DisableMessage': ''
  },
  {
    'Id': 9,
    'NodeType': 'Relationship',
    'ParentId': 7,
    'SourceName': 'Employee[LocationId] -> Location[LocationId]',
    'TargetName': null,
    'SourceInternalName': 'Employee[LocationId] -> Location[LocationId]',
    'TargetInternalName': null,
    'Level': 1,
    'Status': 'Missing in Target',
    'MergeAction': 'Create',
    'SourceObjectDefinition': 'Employee Location Relationship',
    'TargetObjectDefinition': null,
    'ChildNodes': [],
    'AvailableActions': ['Create', 'Skip'],
    'ShowNode': true,
    'DropdownDisabled': false,
    'DisableMessage': ''
  },
  {
    'Id': 10,
    'NodeType': 'Measure',
    'ParentId': 7,
    'SourceName': null,
    'TargetName': 'EducationCount',
    'SourceInternalName': null,
    'TargetInternalName': 'EducationCount',
    'Level': 1,
    'Status': 'Missing in Source',
    'MergeAction': 'Delete',
    'SourceObjectDefinition': null,
    'TargetObjectDefinition': 'EducationCount Measure',
    'ChildNodes': [],
    'AvailableActions': ['Delete', 'Skip'],
    'ShowNode': true,
    'DropdownDisabled': false,
    'DisableMessage': ''
  },
  {
    'Id': 11,
    'NodeType': 'Measure',
    'ParentId': 7,
    'SourceName': null,
    'TargetName': 'MaxEmployeeAge',
    'SourceInternalName': null,
    'TargetInternalName': 'MaxEmployeeAge',
    'Level': 1,
    'Status': 'Missing in Source',
    'MergeAction': 'Delete',
    'SourceObjectDefinition': null,
    'TargetObjectDefinition': 'MaxEmployeeAge Measure',
    'ChildNodes': [],
    'AvailableActions': ['Delete', 'Skip'],
    'ShowNode': true,
    'DropdownDisabled': false,
    'DisableMessage': ''
  },
  {
    'Id': 12,
    'NodeType': 'Relationship',
    'ParentId': 4,
    'SourceName': null,
    'TargetName': 'EmployeeProject[EmployeeId] -> Employee[EmployeeId]',
    'SourceInternalName': null,
    'TargetInternalName': 'EmployeeProject[EmployeeId] -> Employee[EmployeeId]',
    'Level': 1,
    'Status': 'Missing in Source',
    'MergeAction': 'Delete',
    'SourceObjectDefinition': null,
    'TargetObjectDefinition': 'EmployeeProject to Employee Relationship',
    'ChildNodes': [],
    'AvailableActions': ['Delete', 'Skip'],
    'ShowNode': true,
    'DropdownDisabled': false,
    'DisableMessage': ''
  }
];
