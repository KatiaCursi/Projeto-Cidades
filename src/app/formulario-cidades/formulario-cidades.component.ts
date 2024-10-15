import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CidadesService } from '../cidades.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-cidades',
  templateUrl: './formulario-cidades.component.html',
  styleUrl: './formulario-cidades.component.css'
})
export class FormularioCidadesComponent implements OnInit{

  //primeiro declara o form group
  formGroupCidades:FormGroup;
  
constructor(private router:Router,
              private activeRouter:ActivatedRoute,
              private service:CidadesService,
              private formBuilder:FormBuilder //segundo declara os parametros
            ){this.formGroupCidades=formBuilder.group({
              id: [''],
              nome:[''],
              estado:[''],
              cep: [''],
              habitantes:[''], 
              pais:['']
            })}
        
  ngOnInit(){
    const id=Number(this.activeRouter.snapshot.paramMap.get("id"))
    this.loadCidades(id);
  }
  loadCidades(id:number){
    this.service.getCidadesByID(id).subscribe({
   next:data=> this.formGroupCidades.setValue(data)
    })
  };

  update(){this.service.update(this.formGroupCidades.value).subscribe({
    next:()=> this.router.navigate(['cidades'])
  })
};
save(){this.service.save(this.formGroupCidades.value).subscribe({
  next:()=> this.router.navigate(['cidades'])
})}
}
