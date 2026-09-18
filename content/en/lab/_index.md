---
title: Lab
summary: Hardware platforms at the Robotics Research group at FTN.
type: landing

sections:
  - block: markdown
    content:
      title: Lab & Hardware
      text: |
        The Robotics Research group at FTN is **temporarily housed** in MI G3-1, G3-2, and MI 25 (workshop) per the public FTN Mehatronika page. Heads of the group: prof. dr Milutin Nikolić, prof. dr Mirko Raković, and prof. dr Srđan Savić. Lab technicians: Predrag Oros and Tanja Berisavljević.

  - block: gallery
    content:
      title: Platforms
      items:
        - src: lab/abb-irb140.jpg
          alt: Two ABB IRB140 robotic arms
          caption: Two ABB IRB140 robotic arms
          title: Robots
    design:
      layout: masonry
      columns: 2

  - block: markdown
    content:
      title: Equipment
      text: |
        ### Robots

        | Equipment | Description | Source |
        | --- | --- | --- |
        | **Two ABB IRB140 robotic arms** | Orange and white IRB 140 manipulators used for teaching and experiments; programmed via `open_abb` | GitHub robotics-ftn; Applied Sciences 2022 |

        ### Hands and tooling

        | Equipment | Description | Source |
        | --- | --- | --- |
        | **FTN robot hand** | Underactuated tendon-driven hand; 5 palm-mounted DC motors; fuzzy position–velocity control | JIFS 2018, DOI 10.3233/JIFS-17879 |
        | **Robotiq grippers** | Modbus RTU control via `robotiq_modbusrtu` | GitHub robotics-ftn |

        ### Humanoids and motion

        | Equipment | Description | Source |
        | --- | --- | --- |
        | **Humanoid MARKO** | 33-DOF anthropomorphic platform for assistive therapy research; proprioceptive sensing, cameras, microphone | Public FTN papers & ETRAN 2018 prototype report |
        | **Motion capture** | Motion Capture and Analysis Laboratory (prof. dr Srđan Savić) | [mehatronika.ftn.uns.ac.rs/laboratorije/](https://mehatronika.ftn.uns.ac.rs/laboratorije/) |
---
