---
title: ''
summary: ''
date: 2026-01-01
type: landing

sections:
  - block: hero
    content:
      eyebrow: Laboratorija za robotiku i mehatroniku · FTN Novi Sad
      title: '[Roboti koji se kreću, hvataju i sarađuju] sa ljudima'
      text: |
        Razvijamo humanoidne platforme, okretne ruke i sisteme za industrijsku manipulaciju — od primitiva bipedalne lokomocije do interakcije čovek–robot vođene pogledom — testirane na hardveru Fakulteta tehničkih nauka.
      announcement:
        badge:
          text: FTN
          color: primary
        text: "Katedra za mehatroniku, robotiku i automatizaciju"
        link:
          text: Pridružite se laboratoriji
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
        type: video
        src: /media/hero/lab-demo.mp4
        autoplay: true
        loop: true
        muted: true
    design:
      layout: split-right
      size: viewport
      alignment: left
      css_class: "rl-hero-cinematic"

  - block: markdown
    content:
      title: ''
      text: |
        <div class="rl-stats">
          <div class="rl-stat"><strong>50+</strong> recenziranih radova (javni FTN zapis, prof. Raković)</div>
          <div class="rl-stat"><strong>MARKO</strong> humanoid · 33 DOF asistivna platforma</div>
          <div class="rl-stat"><strong>7</strong> otvorenih repozitorijuma na <a href="https://github.com/robotics-ftn">github.com/robotics-ftn</a></div>
          <div class="rl-stat"><strong>H308</strong> Industrijska robotika · 8 ESPB na FTN-u</div>
        </div>
    design:
      css_class: "py-8"

  - block: focus-areas
    content:
      title: Istraživački stubovi
      subtitle: Industrijska · Humanoidna · Interakcija · Kontrola
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
        - name: Sistemi kontrole
          description: Fuzzy i nelinearna kontrola za nedovoljno aktuirane robote ruke, manipulaciju gornjeg dela tela i ugrađene kontrolere u realnom vremenu.
          icon: hero/cpu-chip
          gradient: from-emerald-500 to-teal-600
          status: active
          topics: [Fuzzy kontrola, Ugrađeni sistemi, Manipulacija]
          cta:
            text: FTN robot ruka
            url: /publications/ftn-robot-hand-2018/
    design:
      layout: cards
      css_class: "py-16"

  - block: collection
    id: featured-publications
    content:
      title: Istaknute publikacije
      filters:
        folders:
          - publications
        featured_only: true
    design:
      view: citation
      columns: 1
      css_class: "py-12"

  - block: collection
    content:
      title: Otvoreni kod @ robotics-ftn
      filters:
        folders:
          - projects
      count: 5
    design:
      view: article-grid
      columns: 2
      show_date: false
      css_class: "py-12"

  - block: cta-card
    content:
      title: Gradite robote sa nama na FTN-u
      text: |
        Teme za doktorske i master studije iz lokomocije, HRI-ja i industrijske manipulacije. Pišite laboratoriji ili pogledajte oblasti za teze na stranici Pridruži se.
      button:
        text: Pridružite se
        url: /join/
    design:
      card:
        css_class: 'bg-gradient-to-br from-cyan-600 via-slate-900 to-orange-600 text-white shadow-2xl ring-1 ring-cyan-400/30'
---
