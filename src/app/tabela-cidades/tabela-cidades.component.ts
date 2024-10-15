import { Component } from '@angular/core';
import { cidade } from '../cidades';
import { CidadesService } from '../cidades.service';
import { Router } from '@angular/router';
import { ConstructorProvider } from '@angular/core';

@Component({
  selector: 'app-tabela-cidades',
  templateUrl: './tabela-cidades.component.html',
  styleUrl: './tabela-cidades.component.css'
})
export class TabelaCidadesComponent {

  cidades: cidade[] = [];

  constructor(private service: CidadesService,
              private router: Router
  ){}

  ngOnInit(){
    this.loadCidades()
  }
  loadCidades(){
    this.service.getCidades().subscribe({
      next: data => this.cidades = data
    })
  }

  delete(cidade:cidade){
    this.service.delete(cidade).subscribe({
      next: () => this.loadCidades()
    })
  }

  create(){this.router.navigate(['cidade'])}
}
