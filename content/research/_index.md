---
title: Research
summary: Industrial manipulation, humanoid locomotion, HRI, and control at FTN.
type: landing

sections:
  - block: markdown
    content:
      title: Research & Projects
      text: |
        The **Laboratory for Robotics and Mechatronics** (Лабораторија за роботику и мehatroniku) at FTN develops humanoid robots, dexterous hands, industrial manipulation, and human–robot interaction systems. Lab head: **prof. dr Mirko Raković**. Open code: [github.com/robotics-ftn](https://github.com/robotics-ftn).

  - block: focus-areas
    content:
      title: Themes
      items:
        - name: Industrial Manipulation
          description: ABB cells, Robotiq Modbus RTU, scaled factory automation (Applied Sciences, 2022).
          icon: hero/cog-6-tooth
          gradient: from-cyan-500 to-blue-700
          status: active
          cta:
            text: open_abb
            url: https://github.com/robotics-ftn/open_abb
        - name: Humanoid Locomotion
          description: Motion primitives for biped walking; dynamic balance with multiple contacts.
          icon: hero/arrow-path
          gradient: from-orange-500 to-red-600
          status: active
          cta:
            text: T-RO 2014
            url: /publications/biped-motion-primitives-2014/
        - name: Human–Robot Interaction
          description: Gaze dialogue model (IEEE Trans. Cybernetics, 2024) and action anticipation (RA-L, 2018).
          icon: hero/chat-bubble-left-right
          gradient: from-violet-500 to-purple-700
          status: active
          cta:
            text: Gaze paper
            url: /publications/gaze-dialogue-2024/
        - name: Control Systems
          description: Fuzzy position–velocity control of the underactuated FTN robot hand (JIFS, 2018).
          icon: hero/adjustments-horizontal
          gradient: from-emerald-500 to-cyan-700
          status: active
          cta:
            text: JIFS paper
            url: /publications/ftn-robot-hand-2018/
    design:
      layout: cards

  - block: collection
    content:
      title: GitHub Projects
      text: Active repositories from the public **robotics-ftn** organization.
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
      title: Collaborate
      text: Industry and academic partners — reach out via the Join page or email the lab.
      button:
        text: Contact
        url: /join/#contact
    design:
      card:
        css_class: 'ring-1 ring-cyan-500/30 bg-slate-900/80'
---