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
        Razvijamo humanoidne platforme, okretne ruke, industrijsku manipulaciju i mobilnu robotiku — od primitiva bipedalne lokomocije do interakcije čovek–robot vođene pogledom — testirane na hardveru Fakulteta tehničkih nauka.
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
      subtitle: Industrijska · Humanoidna · Interakcija · Mobilna · Ruke · Percepcija
      text: Grupisano po temama Katedre za mehatroniku, robotiku i automatizaciju na FTN-u i javne robotics-ftn organizacije na GitHub-u.
      items:
        - name: Industrijska manipulacija
          description: Programiranje ABB robota, Robotiq hvataljke, skalirane ćelije fabričke automatizacije i nastava iz industrijske robotike (H308).
          icon: hero/wrench-screwdriver
          gradient: from-cyan-500 to-blue-600
          status: active
          topics: [ABB, Robotiq, Fabričke ćelije]
          cta:
            text: GitHub
            url: https://github.com/robotics-ftn/open_abb
        - name: Humanoidna lokomocija
          description: Bipedalno hodanje pomoću primitiva kretanja, dinamički balans i online planiranje putanje na nestrukturisanom terenu.
          icon: hero/bolt
          gradient: from-orange-500 to-amber-600
          status: active
          topics: [Bipedalni hod, Primitivi kretanja, Balans]
          cta:
            text: IEEE T-RO rad
            url: /publications/biped-motion-primitives-2014/
        - name: Interakcija čovek–robot
          description: Model dijaloga pogledom, anticipacija akcija i kolaborativni zadaci na humanoidnim i industrijskim platformama.
          icon: hero/users
          gradient: from-fuchsia-500 to-violet-600
          status: active
          topics: [Pogled, Anticipacija, Saradnja]
          cta:
            text: RA-L rad
            url: /publications/action-anticipation-2018/
        - name: Mobilna robotika
          description: Mobilne platforme za navigaciju i rad u terenu, uz humanoidne i industrijske sisteme na FTN-u.
          icon: hero/map
          gradient: from-sky-500 to-indigo-600
          status: active
          topics: [Navigacija, Mobilne platforme, Terenska robotika]
        - name: Okretne ruke i EOAT
          description: Nedovoljno aktuirane tetivne ruke, silom-osetljivi troprsti dizajni i alati na kraju ruke na industrijskim ćelijama.
          icon: hero/hand-raised
          gradient: from-emerald-500 to-teal-600
          status: active
          topics: [FTN ruka, Troprsta ruka, EOAT]
          cta:
            text: Troprsta ruka
            url: /publications/three-finger-hand-2026/
        - name: Percepcija i taktilno senziranje
          description: Vizuelno zaključivanje o svojstvima objekata i hvatanje osetljivo na silu na okretnim rukama.
          icon: hero/eye
          gradient: from-teal-500 to-emerald-600
          status: active
          topics: [Vid, Osetljivanje sile, Svojstva objekata]
          cta:
            text: ICRA 2022
            url: /publications/icra-object-properties-2022/
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
        Teme za doktorske i master studije iz lokomocije, HRI-ja, industrijske manipulacije, mobilne robotike i okretnih ruku. Pišite grupi ili pogledajte oblasti za teze na stranici Pridruži se.
      button:
        text: Pridružite se
        url: /join/
    design:
      card:
        css_class: 'bg-gradient-to-br from-cyan-600 via-slate-900 to-orange-600 text-white shadow-2xl ring-1 ring-cyan-400/30'
---
