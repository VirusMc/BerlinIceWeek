# Berlin Ice Cream Week

Dies ist ein kleiner Webserver, in dem man am Ende eine Offline Karte mit allen Eisläden erhält, die man besuchen möchte.

## Wie funktioniert es?

1. Code herunterladen
2. Verzeichniss öffnen
3. `npm run start` in die Konsole eingeben
4. JSON-Datei hochladen und Webseite beachten.

## Wie muss die JSON-Datei aussehen?

```JSON
{
  "finished": "boolean // Ob die Datei bereits vollendet ist",
  "home": "number[] // Die Koordinaten deines Zuhauses",
  "data": "Store[] // Alle Eisläden"
}
```

### Store

```JSON
{
  "market": "string // Der Name des Eisladen",
  "location": "string // Die Adresse des Eisladens",
  "ice_cream": "string // Die Eissorte die Angeboten wird",
  "geocode": "number[] // Die Koordinaten des Eisladens"
}
```

## Wie bekomme ich die Koordinaten?

Aktuell geschied das manuell durch [Open Route Service](https://maps.openrouteservice.org/)

## TODO

- [ ] Einbindung von ORS zur Erstellung der Geocodes
- [ ] Erstellung von Beispieldateien, die in Stage 1 auswählbar sind. / Speicherung der alten Dateien
- [ ] Erstellung einer Weboberfläche zur Bereitstellung der JSON-Datei
