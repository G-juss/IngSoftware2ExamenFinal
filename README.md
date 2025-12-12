# Explicación Técnica

## Objetivo del proyecto

Busca separar la creación de los movimientos financieros de la interfaz de usuario. Antes, la UI creaba directamente todos los movimientos, por lo que cuando se agregaba un nuevo tipo el código se volvía inestable (al intentar agregar dos movimientos nuevos me desconfiguraba la vista web). Ahora usando Factory Method, la UI solo pide a la fábrica que cree los movimientos y se concentra en mostrarlos.

## Qué se configuró

 Ahora para agregar un nuevo tipo de movimiento, solo se crea la clase y se registra en la fábrica. La UI lo reconoce automáticamente sin tocar nada de su código, cumpliendo con el principio OCP.

## Cambios

Esta refactorización reduce el acoplamiento porque la UI ya no depende de todas las clases concretas, solo de la fábrica y de la abstracción Movement. Ahora cada módulo tiene una única responsabilidad: la fábrica crea objetos, la UI los muestra y cada clase de movimiento maneja su lógica específica. 

## Cómo agregar un nuevo tipo

Primero se crea una clase que extienda Movement y se implementa getNetAmount(), getColor() y getIcon(). Luego, se registra la clase en la fábrica con register('nombreTipo', ClaseNueva). Con esto, la UI reconocerá el nuevo movimiento automáticamente sin tener que modificar el código que se nos dió.
