import { Component } from '@angular/core';

/**
Декоратор – это функция, которая добавляет метаданные в класс, его методы или аргументы методов.
Чтобы превратить класс в компонент, мы добавляем к нему метаданные. Они нужны, чтобы определить свойства компонента,
такие, как шаблон, селектор и некоторые другие.
 */
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent { }