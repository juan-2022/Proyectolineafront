import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { debounce, debounceTime } from 'rxjs';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit{

    idservicio :any;
    src : any;
    data$ : any;
    load : boolean = false;
    informacion:any;
    id:any;
    identificacionestudiante:any;
    control = new FormControl();
    loadcurso: boolean = false;
    informacionCurso: any;
    displayedColumns: string[] = ['codigo', 'nombre', 'creditos', 'descripcion'];
    dataSource = new MatTableDataSource<any>([]);
    constructor(private servicios:ServiciosService){

    }
    ngOnInit(){
      this.ObserverChangeSearch();
    }
    ObserverChangeSearch(){
      this.control.valueChanges.pipe(
        debounceTime(500)
      ).subscribe(
        query=>{
          console.log("entro");
          console.log(query);
          this.idservicio = query;
          this.search();
        }
      )
    }
    search(): any{

      const nombres = {
        nombreEstudiante : this.idservicio
      };

      this.servicios.buscarAlumno(nombres).subscribe(data =>{
        console.log(data);
        this.data$ = data;
      }
      )
      
    }

    alumno(id:any){
      console.log(this.id);
      this.identificacionestudiante = id.toString()
      const ids ={
        id : id.toString()
      }
      console.log(ids);
      this.servicios.alumnosxid(ids).subscribe(data=>{
        this.informacion = data;
        this.load = true;
      })

    }

    CursonAlumno(){

      const ids ={
        id : this.identificacionestudiante
      }
      this.servicios.materiasxid(ids).subscribe(data=>{
        this.informacionCurso = data;
        this.dataSource.data = this.informacionCurso
        this.loadcurso= true;
      })
    }
}
