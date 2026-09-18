---
title: ''
summary: ''
date: 2026-01-01
type: landing

sections:
  - block: hero
    content:
      eyebrow: Istraživačka grupa za robotiku na FTN-u · Novi Sad
      title: '[Roboti koji se kreću, hvataju i sarađuju] sa ljudima'
      text: |
        Razvijamo humanoidne platforme, okretne ruke, robotsku manipulaciju i mobilnu robotiku — od primitiva bipedalne lokomocije do interakcije čovek–robot vođene pogledom — testirane na hardveru Fakulteta tehničkih nauka.
      announcement:
        badge:
          text: FTN
          color: primary
        text: "Katedra za mehatroniku, robotiku i automatizaciju"
        link:
          text: Pridružite se grupi
          url: /join/
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
      text: Grupisano po temama Katedre za mehatroniku, robotiku i automatizaciju na FTN-u i javne robotics-ftn organizacije na GitHub-u.
      items:
        - name: Robotska manipulacija
          description: Programiranje ABB robota, Robotiq hvataljke, skalirane ćelije fabričke automatizacije i nastava iz industrijske robotike (H308).
          image: research/robot-manipulation.jpg
          gradient: from-slate-300 to-slate-500
          status: active
          topics: [ABB, Robotiq, Fabričke ćelije]
          url: /research/robot-manipulation/
          cta:
            text: Saznajte više
            url: /research/robot-manipulation/
        - name: Lokomocija
          description: Bipedalno hodanje pomoću primitiva kretanja, dinamički balans i online planiranje putanje na nestrukturisanom terenu.
          image: research/locomotion-card.jpg
          gradient: from-slate-300 to-slate-500
          status: active
          topics: [Bipedalni hod, Primitivi kretanja, Balans]
          url: /research/locomotion/
          cta:
            text: Saznajte više
            url: /research/locomotion/
        - name: Interakcija čovek–robot
          description: Model dijaloga pogledom, anticipacija akcija i kolaborativni zadaci na humanoidnim i industrijskim platformama.
          image: research/human-robot-interaction.jpg
          gradient: from-slate-300 to-slate-500
          status: active
          topics: [Pogled, Anticipacija, Saradnja]
          url: /research/human-robot-interaction/
          cta:
            text: Saznajte više
            url: /research/human-robot-interaction/
        - name: Mobilna robotika
          description: Mobilne platforme za navigaciju i rad u terenu, uz humanoidne i industrijske sisteme na FTN-u.
          image: research/mobile-robotics-card.jpg
          gradient: from-slate-300 to-slate-500
          status: active
          topics: [Navigacija, Mobilne platforme, Terenska robotika]
          url: /research/mobile-robotics/
          cta:
            text: Saznajte više
            url: /research/mobile-robotics/
        - name: Okretne ruke i EOAT
          description: Nedovoljno aktuirane tetivne ruke, silom-osetljivi troprsti dizajni i alati na kraju ruke na industrijskim ćelijama.
          image: research/dexterous-hands-eoat-card.jpg
          gradient: from-slate-300 to-slate-500
          status: active
          topics: [FTN ruka, Troprsta ruka, EOAT]
          url: /research/dexterous-hands-eoat/
          cta:
            text: Saznajte više
            url: /research/dexterous-hands-eoat/
        - name: Percepcija i taktilno senziranje
          description: Vizuelno zaključivanje o svojstvima objekata i hvatanje osetljivo na silu na okretnim rukama.
          image: research/perception-tactile-sensing.jpg
          gradient: from-slate-300 to-slate-500
          status: active
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
      count: 5
      sort_by: Weight
      sort_ascending: true
      filters:
        folders:
          - publications
        featured_only: true
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
        css_class: 'bg-gradient-to-br from-cyan-600 via-slate-900 to-orange-600 text-white shadow-2xl ring-1 ring-cyan-400/30'
---
