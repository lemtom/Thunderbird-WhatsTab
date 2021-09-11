# WhatsTab
Unofficial WhatsApp Web add-on for Thunderbird, it adds a button that opens a WhatsApp Web tab in Thunderbird.

#### Installing from sources
Download the repository, zip it, rename it to WhatsTab.xpi and choose install addon from file in Thunderbird.

In linux the xpi file can be created with the following commands
* `git clone https://github.com/lemtom/Thunderbird-WhatsTab`
* `cd ./Thunderbird-WhatsTab`
* `VERSION=$(cat ./manifest.json | jq --raw-output '.version')`
* `zip -r "../WhatsTab-${VERSION}-tb.xpi" *`
