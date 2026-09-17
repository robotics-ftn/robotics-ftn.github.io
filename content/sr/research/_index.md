---
title: Istraživanja
summary: Industrijska manipulacija, humanoidna lokomocija, HRI i kontrola na FTN-u.
type: landing

sections:
  - block: markdown
    content:
      title: Istraživanja i projekti
      text: |
        **Laboratorija za robotiku i mehatroniku** na FTN-u razvija humanoidne robote, okretne ruke, industrijsku manipulaciju i sisteme interakcije čovek–robot. Laboratorijom ravnopravno rukovode **prof. dr Milutin Nikolić**, **prof. dr Mirko Raković** i **prof. dr Srđan Savić**. Otvoreni kod: [github.com/robotics-ftn](https://github.com/robotics-ftn).

  - block: focus-areas
    content:
      title: Teme
      items:
        - name: Industrijska manipulacija
          description: ABB ćelije, Robotiq Modbus RTU, skalirana fabrička automatizacija (Applied Sciences, 2022).
          icon: hero/cog-6-tooth
          gradient: from-cyan-500 to-blue-700
          status: active
          cta:
            text: open_abb
            url: https://github.com/robotics-ftn/open_abb
        - name: Humanoidna lokomocija
          description: Primitivi kretanja za bipedalno hodanje; dinamički balans sa više kontaktnih tačaka.
          icon: hero/arrow-path
          gradient: from-orange-500 to-red-600
          status: active
          cta:
            text: T-RO 2014
            url: /publications/biped-motion-primitives-2014/
        - name: Interakcija čovek–robot
          description: Model dijaloga pogledom (IEEE Trans. Cybernetics, 2024) i anticipacija akcija (RA-L, 2018).
          icon: hero/chat-bubble-left-right
          gradient: from-violet-500 to-purple-700
          status: active
          cta:
            text: Rad o pogledu
            url: /publications/gaze-dialogue-2024/
        - name: Sistemi kontrole
          description: Fuzzy kontrola položaj–brzina nedovoljno aktuirane FTN robote ruke (JIFS, 2018).
          icon: hero/adjustments-horizontal
          gradient: from-emerald-500 to-cyan-700
          status: active
          cta:
            text: JIFS rad
            url: /publications/ftn-robot-hand-2018/
    design:
      layout: cards

  - block: collection
    content:
      title: GitHub projekti
      text: Aktivni repozitorijumi javne **robotics-ftn** organizacije.
      filters:
        folders:
          - projects
    design:
      view: article-grid
      columns: 3
      show_date: false
      show_read_time: false

  - block: cta-card
    content:
      title: Saradnja
      text: Industrijski i akademski partneri — javite se putem stranice Pridruži se ili e-poštom laboratoriji.
      button:
        text: Kontakt
        url: /join/#contact
    design:
      card:
        css_class: 'ring-1 ring-cyan-500/30 bg-slate-900/80'
---
