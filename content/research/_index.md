---
title: Research
summary: Mobile manipulation, field robotics, and human-robot interaction at FTN Novi Sad.
type: landing

sections:
  - block: markdown
    content:
      title: Research at Robotics Lab FTN
      text: |
        Our laboratory at the Faculty of Technical Sciences (FTN), University of Novi Sad, develops autonomous systems that must operate reliably outside controlled lab conditions. We combine model-based control with learning-based perception, validate on our mobile platforms and manipulators, and publish open software whenever possible.

        **Core themes:** mobile robot navigation, collaborative manipulation, human-robot interaction, and field robotics for agriculture and logistics.

  - block: focus-areas
    content:
      title: Research Themes
      items:
        - name: Mobile Robot Navigation
          description: LiDAR–inertial odometry, semantic mapping, and risk-aware planning for indoor logistics and outdoor inspection.
          emoji: "🛰️"
          gradient: from-blue-500 to-cyan-500
          status: active
          topics: [SLAM, Planning, Multi-sensor fusion]
          cta:
            text: GitHub
            url: https://github.com/robotics-ftn/mobile-robot-navigation
        - name: Collaborative Manipulation
          description: Dual-arm coordination, grasp affordances, and task-level reasoning for flexible manufacturing cells.
          emoji: "🦾"
          gradient: from-indigo-500 to-purple-600
          status: active
          topics: [Manipulation, Task planning, Safety]
          cta:
            text: GitHub
            url: https://github.com/robotics-ftn/collaborative-manipulation
        - name: Human-Robot Interaction
          description: Shared autonomy interfaces, operator workload modeling, and safety-aware teleoperation for mixed teams.
          emoji: "🤝"
          gradient: from-violet-500 to-fuchsia-500
          status: active
          topics: [Teleoperation, Intent prediction, UX]
          cta:
            text: GitHub
            url: https://github.com/robotics-ftn/human-robot-interaction
        - name: Field Robotics
          description: UAV and UGV systems for vineyard monitoring, yield estimation, and environmental sensing in Vojvodina.
          emoji: "🌿"
          gradient: from-emerald-500 to-teal-500
          status: emerging
          topics: [Agriculture, UAV, Edge AI]
          cta:
            text: GitHub
            url: https://github.com/robotics-ftn/field-robotics-vineyard
    design:
      layout: cards

  - block: collection
    content:
      title: Active Projects
      text: Each card links to a project page with code repositories and recent milestones.
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
      title: Collaborate with us
      text: Industry partners and visiting researchers are welcome. Reach out with a short project description and timeline.
      button:
        text: Contact the lab
        url: /join/#contact
    design:
      card:
        css_class: 'bg-gray-50 dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-700'
---
