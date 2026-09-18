---
title: ''
summary: ''
date: 2026-01-01
type: landing

sections:
  - block: hero
    content:
      eyebrow: Robotics Research group at FTN · Novi Sad
      title: '[Robots that move, grasp, and collaborate] with people'
      text: |
        We build humanoid platforms, dexterous hands, and industrial manipulation systems — from biped locomotion primitives to gaze-driven human–robot interaction — tested on hardware at the Faculty of Technical Sciences.
      announcement:
        badge:
          text: FTN
          color: primary
        text: "Chair of Mechatronics, Robotics and Automation"
        link:
          text: Join the group
          url: /join/
      primary_action:
        text: Explore Research
        url: /research/
        style: gradient
      secondary_action:
        text: View Publications
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

  - block: markdown
    content:
      title: ''
      text: |
        <div class="rl-stats">
          <div class="rl-stat"><strong>50+</strong> peer-reviewed papers (public FTN record, prof. Raković)</div>
          <div class="rl-stat"><strong>MARKO</strong> humanoid · 33 DOF assistive platform</div>
          <div class="rl-stat"><strong>7</strong> open repos on <a href="https://github.com/robotics-ftn">github.com/robotics-ftn</a></div>
          <div class="rl-stat"><strong>H308</strong> Industrial Robotics · 8 ECTS at FTN</div>
        </div>
    design:
      css_class: "py-8"

  - block: focus-areas
    content:
      title: Research Pillars
      subtitle: Industrial · Humanoid · Interaction · Control
      text: Grouped by themes from the Chair of Mechatronics, Robotics and Automation at FTN and the public robotics-ftn code organization.
      items:
        - name: Industrial Manipulation
          description: ABB robot programming, Robotiq grippers, scaled factory-automation cells, and industrial robotics coursework (H308).
          icon: hero/wrench-screwdriver
          gradient: from-cyan-500 to-blue-600
          status: active
          topics: [ABB, Robotiq, Factory cells]
          cta:
            text: GitHub
            url: https://github.com/robotics-ftn/open_abb
        - name: Humanoid Locomotion
          description: Biped walking via motion primitives, dynamic balance, and online path planning on unstructured terrain.
          icon: hero/bolt
          gradient: from-orange-500 to-amber-600
          status: active
          topics: [Biped gait, Motion primitives, Balance]
          cta:
            text: IEEE T-RO paper
            url: /publications/biped-motion-primitives-2014/
        - name: Human–Robot Interaction
          description: Action anticipation, gaze dialogue models, and collaborative tasks with humanoid and industrial platforms.
          icon: hero/users
          gradient: from-fuchsia-500 to-violet-600
          status: active
          topics: [Gaze, Anticipation, Collaboration]
          cta:
            text: RA-L paper
            url: /publications/action-anticipation-2018/
        - name: Control Systems
          description: Fuzzy and nonlinear control for underactuated robot hands, upper-body manipulation, and embedded real-time controllers.
          icon: hero/cpu-chip
          gradient: from-emerald-500 to-teal-600
          status: active
          topics: [Fuzzy control, Embedded, Manipulation]
          cta:
            text: FTN robot hand
            url: /publications/ftn-robot-hand-2018/
    design:
      layout: cards
      css_class: "py-16"

  - block: collection
    id: featured-publications
    content:
      title: Featured Publications
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
      title: Open Source @ robotics-ftn
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
      title: Build robots with us at FTN
      text: |
        PhD and MSc topics in locomotion, HRI, and industrial manipulation. Contact the group or browse thesis areas on the Join page.
      button:
        text: Join Us
        url: /join/
    design:
      card:
        css_class: 'bg-gradient-to-br from-cyan-600 via-slate-900 to-orange-600 text-white shadow-2xl ring-1 ring-cyan-400/30'
---