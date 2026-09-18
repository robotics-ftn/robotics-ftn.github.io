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
        We build humanoid platforms, dexterous hands, robot manipulation, and mobile robotics — from biped locomotion primitives to gaze-driven human–robot interaction — tested on hardware at the Faculty of Technical Sciences.
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
      subtitle: Manipulation · Locomotion · Interaction · Mobile · Hands · Perception
      text: Grouped by themes from the Chair of Mechatronics, Robotics and Automation at FTN and the public robotics-ftn code organization.
      items:
        - name: Robot manipulation
          description: ABB robot programming, Robotiq grippers, scaled factory-automation cells, and industrial robotics coursework (H308).
          image: research/robot-manipulation.jpg
          gradient: from-slate-300 to-slate-500
          status: active
          topics: [ABB, Robotiq, Factory cells]
          url: /research/robot-manipulation/
          cta:
            text: Learn more
            url: /research/robot-manipulation/
        - name: Locomotion
          description: Biped walking via motion primitives, dynamic balance, and online path planning on unstructured terrain.
          image: research/locomotion-card.jpg
          gradient: from-slate-300 to-slate-500
          status: active
          topics: [Biped gait, Motion primitives, Balance]
          url: /research/locomotion/
          cta:
            text: Learn more
            url: /research/locomotion/
        - name: Human–Robot Interaction
          description: Action anticipation, gaze dialogue models, and collaborative tasks with humanoid and industrial platforms.
          image: research/human-robot-interaction.jpg
          gradient: from-slate-300 to-slate-500
          status: active
          topics: [Gaze, Anticipation, Collaboration]
          url: /research/human-robot-interaction/
          cta:
            text: Learn more
            url: /research/human-robot-interaction/
        - name: Mobile robotics
          description: Mobile platforms for navigation and field tasks, developed alongside humanoid and industrial systems at FTN.
          image: research/mobile-robotics-card.jpg
          gradient: from-slate-300 to-slate-500
          status: active
          topics: [Navigation, Mobile platforms, Field robotics]
          url: /research/mobile-robotics/
          cta:
            text: Learn more
            url: /research/mobile-robotics/
        - name: Dexterous hands and EOAT
          description: Underactuated tendon-driven hands, force-sensitive three-finger designs, and end-of-arm tooling on industrial cells.
          image: research/dexterous-hands-eoat-card.jpg
          gradient: from-slate-300 to-slate-500
          status: active
          topics: [FTN hand, Three-finger hand, EOAT]
          url: /research/dexterous-hands-eoat/
          cta:
            text: Learn more
            url: /research/dexterous-hands-eoat/
        - name: Perception and tactile sensing
          description: Visual inference of object properties and force-sensitive grasping on dexterous hands.
          image: research/perception-tactile-sensing.jpg
          gradient: from-slate-300 to-slate-500
          status: active
          topics: [Vision, Force sensing, Object properties]
          url: /research/perception-tactile-sensing/
          cta:
            text: Learn more
            url: /research/perception-tactile-sensing/
    design:
      layout: cards
      css_class: "py-16"

  - block: collection
    id: featured-publications
    content:
      title: Featured Publications
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
      title: Build robots with us at FTN
      text: |
        PhD and MSc topics in locomotion, HRI, robot manipulation, mobile robotics, and dexterous hands. Contact the group or browse thesis areas on the Join page.
      button:
        text: Join Us
        url: /join/
    design:
      card:
        css_class: 'bg-gradient-to-br from-cyan-600 via-slate-900 to-orange-600 text-white shadow-2xl ring-1 ring-cyan-400/30'
---