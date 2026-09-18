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
        We build humanoid platforms, dexterous hands, industrial manipulation, and mobile robotics — from biped locomotion primitives to gaze-driven human–robot interaction — tested on hardware at the Faculty of Technical Sciences.
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

  - block: focus-areas
    content:
      title: Research Pillars
      subtitle: Industrial · Humanoid · Interaction · Mobile · Hands · Perception
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
        - name: Mobile robotics
          description: Mobile platforms for navigation and field tasks, developed alongside humanoid and industrial systems at FTN.
          icon: hero/map
          gradient: from-sky-500 to-indigo-600
          status: active
          topics: [Navigation, Mobile platforms, Field robotics]
        - name: Dexterous hands and EOAT
          description: Underactuated tendon-driven hands, force-sensitive three-finger designs, and end-of-arm tooling on industrial cells.
          icon: hero/hand-raised
          gradient: from-emerald-500 to-teal-600
          status: active
          topics: [FTN hand, Three-finger hand, EOAT]
          cta:
            text: Three-finger hand
            url: /publications/three-finger-hand-2026/
        - name: Perception and tactile sensing
          description: Visual inference of object properties and force-sensitive grasping on dexterous hands.
          icon: hero/eye
          gradient: from-teal-500 to-emerald-600
          status: active
          topics: [Vision, Force sensing, Object properties]
          cta:
            text: ICRA 2022
            url: /publications/icra-object-properties-2022/
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

  - block: cta-card
    content:
      title: Build robots with us at FTN
      text: |
        PhD and MSc topics in locomotion, HRI, industrial manipulation, mobile robotics, and dexterous hands. Contact the group or browse thesis areas on the Join page.
      button:
        text: Join Us
        url: /join/
    design:
      card:
        css_class: 'bg-gradient-to-br from-cyan-600 via-slate-900 to-orange-600 text-white shadow-2xl ring-1 ring-cyan-400/30'
---