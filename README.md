# WarenkorbFrontend

Hi,

in diesem Repo findest du eine Codechallenge über einen Warenkorb.

Angular ist in Componenten aufgeteilt, welche sich in einer Baumstruktur anordnen, ähnlich wie beim DOM. Das Angular Root element findet Ihr hier: `src/app/app.component.html`. Es enthält ausschießlich eine einzige Node: `<router-outlet></router-outlet>`. Dieses übernimmt die Aufgabe verschiedene Components in abhängigkeit der URL darzustellen.

Direkt unter der App Route stehen also die Page Components (sichtbar in `src/app/page`). In der `src/app/app-routing.module.ts` lassen sich die HTML Routes zu den verschiedenen Page Components finden.

Die Page Components haben als Route Node immer eine Layout Component. (In diesem Projekt nur `src/app/layout/default-layout/default-layout.component.html`; Sinnvoll wäre für verschiedene Pages reduzierte Menüs abzubilden) Innerhalb dieser finden sich die individuellen Logiken der Pages wieder.

In diesem Projekt wurden drei Pages angelegt. Die Products Page, die Basket Page und die Not Found Page.

## Page Components

### `src/app/page/product-list/product-list.component.html` Component

Diese Component stellt eine Liste an Produkten zur Verfügung (Bilder, Name, Beschreibung, Preis, Rabatte). Diese arbeitet eng mit der `src/app/page/product-list/product-card/product-card.component.html` Component zusammen und bilden zusammen List und Item. So kann über die Product Card entsprechend Products in den Warenkorb gelegt werden.

### `src/app/page/basket/basket.component.html` Component

Diese Component bildet den eigentlichen Warenkorb ab. Alle hinzugefügten Produkte bilden eine Liste. Außerdem gibt es im Hintergrund "Bundles", welche Produkte verknüpfen um eine Upselling zu ermöglichen. Die Warenkorb Component stellt auch die Preise dar, inklusive aller Rabatte (Direkte Discounts und Bundle Discounts) entsprechend dar. Die Berechnung erfolgt jedoch in einem Service.

## Models und Services

Models bilden die Datengrundlage der Applikation. So gibt es Product, ProductBundle, Basket und OrderItem. Die Interfaces, Defaultwerte und Mocks kann man hier finden `src/app/model`.

Services habe in Angular diverse Aufgaben. Sie über Dependency Injection und Autowiring in die Components übergeben.
In unseren Fall sind drei Services Relevant. Zwei Mocks:

- `src/app/service/product-list.service.ts`: Pseudo HTTP Client mit asynchronem Ansatz um Produkte zu laden.
- `src/app/service/product-bundles.service.ts`: Pseudo HTTP Client mit asynchronem Ansatz um Produkt Bundles zu laden.

Und...

### Der Basket Service (`src/app/service/basket.service.ts`)

Der Basket Service ist das "komplizierteste" in diesen Projekt. Er hat drei Grundlegende Aufgaben:

- Er stellt eine Möglichkeit zur Verfügung auf den Warenkorb "zu Subscriben". Er teilt also allen "Interessierten" mit, wenn es Änderungen gab.
- Er stellt die entsprechenden Funktionen zur Verfügung, um Produkte hinzuzufügen und zu entfernen. In einer bestimmten Menge und an einer bestimmten Stelle (Wichtig für die Bundle Funktion)
- Er berechnet bei Änderungen den Preis des Warenkorb, inkl. aller Rabatte und Totals.

## Hinweise

- Es fehlt natürlich ein Backend, Session Handling, Local Persistance uvm.
- Es wäre sinnvoll in einem vollen Projekt eine entsprechende Statemachine zu verwenden, wie NGRX
- Als Frontend Framework wurde Prime NG verwenden. Dieses liefert Standard Funktionen, CSS Classen und mehr out of the box.
- Die Features wurden natürlich nicht immer mit voller Achtung auf Sinn implementiert. So ist das Upselling im CTA des Warenkorbs entsprechend simpel gehalten.
- Manche Funktionen, welche innerhalb des Systems sollten eigentlich in eigene Services extrahiert werden.
- Es gibt kein Testing, kein Linting, kein Build Prozess