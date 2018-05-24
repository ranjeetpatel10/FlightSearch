import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  template: '<div id="about-bg"><div class="container"><div class="row">' +
  '<div class="col-md-12"><h2 class="sub_header text-center">Service Works!</h2></div> </div></div></div>' +
  '<div class="container"><div class="row"><div class="col-sm-12">' +
  '<h4>Hello this is heading of the page...</h4>' +
  '<p>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus ' +
  'sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. ' +
  'Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, ' +
  'sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. ' +
  'Cras mattis iudicium purus sit amet fermentum.</p>' +
  '</div> </div> </div> ',
  styles: [` #about-bg {
    background-image: url(./assets/service.jpeg);
    background-color: #cccccc;
    min-height: 200px;
    margin-top: -20px;
  }
  h2.sub_header{ color: white; font-size: 42px; margin-top: 70px; }`],
})

export class ServiceComponent {}
