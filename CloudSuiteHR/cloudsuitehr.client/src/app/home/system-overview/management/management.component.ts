import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators'


export interface Collaborator {
  name: string;
}

export interface Project {
  code: string;
}

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrl: './management.component.css'
})
export class ManagementComponent implements OnInit{

  myCollaboratorControl = new FormControl<string | Collaborator>('');
  myProjectControl = new FormControl<string | Project>('');

  collaborators: Collaborator[] = [{name: 'Lucas Barros'}, {name: 'Lucas Franczak'}, {name: 'Daniel Reis'}];
  projects: Project[] = [{code: 'Projeto 1'}, {code: 'Projeto 2'}, {code: 'Projeto 3'}];

  filteredCollaboratorOptions: Observable<Collaborator[]> = new Observable;
  filteredProjectOptions: Observable<Project[]> = new Observable;



  ngOnInit() {
    this.filteredCollaboratorOptions = this.myCollaboratorControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.collaborators.slice();
      }),
    );

    this.filteredProjectOptions = this.myProjectControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const code = typeof value === 'string' ? value : value?.code;
        return code ? this._filterCode(code as string) : this.projects.slice();
      }),
    );
  }

  displayFn(user: Collaborator): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): Collaborator[] {
    const filterValue = name.toLowerCase();

    return this.collaborators.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  displayFc(project: Project): string {
    return project && project.code ? project.code : '';
  }

  private _filterCode(code: string): Project[] {
    const filterValue = code.toLowerCase();

    return this.projects.filter(option => option.code.toLowerCase().includes(filterValue));
  }
}
