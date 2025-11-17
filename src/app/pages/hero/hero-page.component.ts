import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
    
    templateUrl: './hero-page.component.html',
    styles: `
    button {
        padding: 5px;
        margin: 5px 10px;
        width: 75px;
    }
    `,

})


export class HeroPageComponent {
    name = signal('Ironman') 
    age = signal(45)

    getHeroDescription() {
        return `${ this.name() } - ${ this.age() }`
    }

    changeHeroDescription() {
        this.name.set('Spiderman');
        this.age.set(22);
    }

    resetForm() {
        this.name.set('Ironman');
        this.age.set(45);
    }

    changeAge() {
        this.age.set(60);

    }
}