---
title: ''
summary: ''
date: 2026-01-01
type: landing

sections:
  - block: hero
    content:
      eyebrow: Faculty of Technical Sciences · University of Novi Sad
      title: '[Robotics Lab FTN] builds robots for real environments'
      text: |
        We research mobile manipulation, field robotics, and human-robot interaction — from vineyard monitoring to collaborative assembly cells on factory floors.
      announcement:
        text: "Recruiting MSc and PhD students for 2026/27 intake."
        link:
          text: View open topics
          url: /join/
      primary_action:
        text: Explore Research
        url: /research/
      secondary_action:
        text: Read Publications
        url: /publications/
      media:
        type: video
        src: /media/hero/lab-demo.mp4
        autoplay: true
        loop: true
        muted: true
    design:
      layout: split-right
      size: default
      alignment: left

  - block: focus-areas
    content:
      title: Research Themes
      subtitle: From perception to deployment
      text: Our work spans algorithms, embedded systems, and field validation with industry and agricultural partners in Vojvodina.
      items:
        - name: Mobile Robot Navigation
          description: Robust localization and planning for uneven outdoor terrain and crowded indoor facilities.
          emoji: "🛰️"
          gradient: from-blue-500 to-cyan-500
          status: active
          topics: [SLAM, Path planning, Sensor fusion]
          cta:
            text: View project
            url: /projects/mobile-robot-navigation/
        - name: Collaborative Manipulation
          description: Dual-arm cells and shared autonomy for small-batch assembly and logistics tasks.
          emoji: "🦾"
          gradient: from-indigo-500 to-purple-600
          status: active
          topics: [Grasping, Task planning, Safety]
          cta:
            text: View project
            url: /projects/collaborative-manipulation/
        - name: Human-Robot Interaction
          description: Intuitive interfaces and intent prediction so operators can supervise robot teams safely.
          emoji: "🤝"
          gradient: from-violet-500 to-fuchsia-500
          status: active
          topics: [Teleoperation, Shared control, UX]
          cta:
            text: View project
            url: /projects/human-robot-interaction/
        - name: Field Robotics
          description: UAV and UGV platforms for crop scouting, yield estimation, and environmental monitoring.
          emoji: "🌿"
          gradient: from-emerald-500 to-teal-500
          status: emerging
          topics: [Agriculture, UAV, Edge AI]
          cta:
            text: View project
            url: /projects/field-robotics-vineyard/
    design:
      layout: cards

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

  - block: collection
    content:
      title: Latest from the Lab
      filters:
        folders:
          - projects
      count: 4
    design:
      view: article-grid
      columns: 2
      show_date: false

  - block: cta-card
    content:
      title: Join the Robotics Lab FTN
      text: |
        We welcome motivated students and collaborators working on perception, planning, and trustworthy autonomy. See open thesis topics and how to apply.
      button:
        text: Join Us
        url: /join/
    design:
      card:
        css_class: 'bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 text-white shadow-xl'
---
