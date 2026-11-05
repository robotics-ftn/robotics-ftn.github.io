---
title: ''
summary: ''
date: 2026-01-01
type: landing

sections:
  - block: hero
    content:
      eyebrow: Robotika@FTN · Novi Sad
      title: '[Roboti koji se kreću, manipulišu predmetima i sarađuju] sa ljudima'
      text: "Razvijamo humanoidne platforme, okretne ruke, robotsku manipulaciju i mobilnu robotiku — od primitiva bipedalne lokomocije do interakcije čovek–robot vođene pogledom — testirane na hardveru Fakulteta tehničkih nauka. Istraživačka grupa za robotiku na FTN-u deo je [Katedre za mehatroniku, robotiku i automatizaciju](https://mehatronika.ftn.uns.ac.rs/) na [Fakultetu tehničkih nauka](https://ftn.uns.ac.rs/). Kod otvorenog koda grupe je na [github.com/robotics-ftn](https://github.com/robotics-ftn)."
      primary_action:
        text: Istraživanja
        url: /research/
        style: gradient
      secondary_action:
        text: Publikacije
        url: /publications/
        style: outline
      media:
        type: image
        src: hero/logo.png
        dark_src: hero/logo-dark.png
        alt: Robotics@FTN Research Group
    design:
      layout: split-right
      size: viewport
      alignment: left
      css_class: "rl-hero-cinematic"

  - block: focus-areas
    content:
      title: Istraživački stubovi
      subtitle: Manipulacija · Lokomocija · Interakcija · Mobilna · Ruke · Percepcija
      text: Istraživačke teme Istraživačke grupe za robotiku na FTN-u.
      items:
        - name: Robotska manipulacija
          description: Programiranje ABB robota, Robotiq hvataljke, skalirane ćelije fabričke automatizacije i nastava iz industrijske robotike (H308).
          image: research/robot-manipulation.jpg
          gradient: from-slate-300 to-slate-500
          topics: [ABB, Robotiq, Fabričke ćelije]
          url: /research/robot-manipulation/
          cta:
            text: Saznajte više
            url: /research/robot-manipulation/
        - name: Lokomocija
          description: Bipedalno hodanje pomoću primitiva kretanja, dinamički balans i online planiranje putanje na nestrukturisanom terenu.
          image: research/locomotion-card.jpg
          gradient: from-slate-300 to-slate-500
          topics: [Bipedalni hod, Primitivi kretanja, Balans]
          url: /research/locomotion/
          cta:
            text: Saznajte više
            url: /research/locomotion/
        - name: Interakcija čovek–robot
          description: Model dijaloga pogledom, anticipacija akcija i kolaborativni zadaci na humanoidnim i industrijskim platformama.
          image: research/human-robot-interaction.jpg
          gradient: from-slate-300 to-slate-500
          topics: [Pogled, Anticipacija, Saradnja]
          url: /research/human-robot-interaction/
          cta:
            text: Saznajte više
            url: /research/human-robot-interaction/
        - name: Mobilna robotika
          description: Mobilne platforme za navigaciju i rad u terenu, uz humanoidne i industrijske sisteme na FTN-u.
          image: research/mobile-robotics-card.jpg
          gradient: from-slate-300 to-slate-500
          topics: [Navigacija, Mobilne platforme, Terenska robotika]
          url: /research/mobile-robotics/
          cta:
            text: Saznajte više
            url: /research/mobile-robotics/
        - name: Okretne ruke i EOAT
          description: Nedovoljno aktuirane tetivne ruke, silom-osetljivi troprsti dizajni i alati na kraju ruke na industrijskim ćelijama.
          image: research/dexterous-hands-eoat-card.jpg
          gradient: from-slate-300 to-slate-500
          topics: [FTN ruka, Troprsta ruka, EOAT]
          url: /research/dexterous-hands-eoat/
          cta:
            text: Saznajte više
            url: /research/dexterous-hands-eoat/
        - name: Percepcija i taktilno senziranje
          description: Vizuelno zaključivanje o svojstvima objekata i hvatanje osetljivo na silu na okretnim rukama.
          image: research/perception-tactile-sensing.jpg
          gradient: from-slate-300 to-slate-500
          topics: [Vid, Osetljivanje sile, Svojstva objekata]
          url: /research/perception-tactile-sensing/
          cta:
            text: Saznajte više
            url: /research/perception-tactile-sensing/
    design:
      layout: cards
      css_class: "py-16"

  - block: collection
    id: featured-publications
    content:
      title: Istaknute publikacije
      text: '[Sve publikacije](/sr/publications/)'
      page_type: publications
      count: 5
      sort_by: Weight
      sort_ascending: true
      filters:
        folders:
          - publications
        featured_only: true
      archive:
        enable: true
        text: Sve publikacije
        link: /publications/
    design:
      view: citation
      columns: 1
      css_class: "py-12"

  - block: cta-card
    content:
      title: Gradite robote sa nama na FTN-u
      text: |
        Teme za doktorske i master studije iz lokomocije, HRI-ja, robotske manipulacije, mobilne robotike i okretnih ruku. Pišite grupi ili pogledajte oblasti za teze na stranici Pridruži se.
      button:
        text: Pridružite se
        url: /join/
    design:
      card:
        css_class: 'bg-gradient-to-r from-cyan-600 to-orange-500 text-white shadow-xl'
---
