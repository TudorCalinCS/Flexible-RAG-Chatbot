# Flexible RAG Chatbot for E-commerce (Bachelor's Thesis)

This project is the final result of my Bachelor's thesis, which focused on developing a **flexible RAG-based (Retrieval-Augmented Generation) chatbot** designed to be easily integrated into **any e-commerce website**.

It combines the power of large language models (LLMs) with structured data (CSV) and unstructured documents (PDF) to provide accurate, context-aware answers to both factual and recommendation-based user questions.

---

## 🎓 About This Project

- 📌 **Thesis Title:** Intelligent Assistance for E-commerce Platforms Using RAG Techniques  
- 🧠 **Core technologies:** LLMs from OpenAI, LangChain, ChromaDB, FastAPI, Python, JavaScript  
- 🔗 **Widgets integrated into two demo e-commerce websites**

---

## 📁 Repository Structure

This repository includes two complete demo applications (frontend + backend) with integrated AI-powered RAG chatbots. Each chatbot is tailored for a different product category:

###  Chatbot Engines
- `chatbot-pcs-laptops/` – Backend chatbot implementation for the **PCs & Laptops** website.  
  Contains:
  - `app/` – Python backend with FastAPI, RAG engine, and question classification logic.
  - `data/` – Structured input files (CSV, PDF) used during question answering.
  - `chroma_db/` – Persisted vector stores, auto-generated from documents.
  - `chatbot_setup_wizard.exe` – Executable GUI to configure chatbot settings for new domains.

- `chatbot-tires/` – Identical structure to `chatbot-pcs-laptops/`, but configured for the **Tires** website.

###   Websites
- `website-pcs-laptops/` – Built with the modern **Vue 3 + Vite** stack. Displays PCs and laptops with a search engine and chatbot integration.
- `website-tires/` – Developed using a **classic Node.js + HTML/CSS/JS** stack (no modern frontend frameworks). Showcases tire products with embedded chatbot.

> 🔐 **Note:** Most `.py` files are intentionally left empty or redacted to preserve academic integrity, as this project is part of my Bachelor's thesis.  
> For access to the full source code or a working demo, feel free to contact me directly.


---

## ⚙️ Key Features

- 🔍 **Automatic question classification** (`objective`, `subjective`, `mixed`)
- 📊 **CSV query interpreter** for factual product-related questions
- 📄 **PDF/document retriever** for instructional answers or policy-based questions
- 🧠 **LLM prompt templating** using a customizable JSON config file
- 💬 **Embeddable JS Widget** to add the chatbot to any e-commerce frontend
- 🧰 **Setup Wizard** to generate the chatbot configuration in minutes

---

## 🖼️ Screenshots

### 🔧 Chatbot Setup Wizard
Includes 4 main steps:
1. Select CSV product data  (Structured product data exported from a database as `.csv`; e.g., tire specs, PC configurations)
2. Select PDF documents (Unstructured text sources such as user guides, installation instructions, compatibility charts, or product manuals; e.g., how to choose a tire, how to assemble a PC, system requirements for games/apps)
3. Customize the prompt & model settings  
4. Review and generate configuration  

<p align="center">
  <img src="https://github.com/user-attachments/assets/f0d2fe95-b88d-4fef-ab66-0c36d90d9e7b" width="340" />
  <img src="https://github.com/user-attachments/assets/0b5395f8-6ed6-4170-a1f4-3b876a413aa5" width="340" />
</p>
<p align="center">
  <em>Step 1 – Upload CSVs</em> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>Step 2 – Upload PDFs</em>
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/a72bee1a-a2ee-480d-baa5-99988f0c2dfc" width="340" />
  <img src="https://github.com/user-attachments/assets/15708a84-2571-4832-9900-da6caa91207f" width="340" />
</p>
<p align="center">
  <em>Step 3 – Customize Prompt & Model</em> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <em>Step 4 – Review & Generate Config</em>
</p>


---

### 🌐 Demo Websites with chatbot integrated

- **Tires Website**
  <img width="1905" height="944" alt="image" src="https://github.com/user-attachments/assets/87bddd75-7908-4fc7-a7ba-68c1353182fc" />
  
- *Chatbot in action*
<div align="center">
  <img src="https://github.com/user-attachments/assets/6a98205f-be2d-4b83-a85e-aa8f2398eebb" alt="Answer_1" width="250" />
  <img src="https://github.com/user-attachments/assets/e80f30ad-c416-40df-9478-5ec46537f9bb" alt="Answer_2_1" width="250" />
  <img src="https://github.com/user-attachments/assets/db87714a-b481-4e5d-8d5b-e941ce15c593" alt="Answer_2_2" width="250" />
</div>


-  **Laptops & PCs Website**
  <img width="1906" height="942" alt="Image" src="https://github.com/user-attachments/assets/d413345e-0a5b-4ac9-bb00-e35b6dde7f3d" />

- *Chatbot in action*
<div align="center">
  <img width="250" alt="image" src="https://github.com/user-attachments/assets/45680711-e7c3-47e6-8bb4-b26201a89259" />

<img width="250" alt="image" src="https://github.com/user-attachments/assets/a04afa61-260c-40b3-a13b-4d9f0007f009" />
<img width="250" alt="image" src="https://github.com/user-attachments/assets/c3a38311-a83c-47e3-b9ea-e414df4cf3d0" />
</div>

---

## 🔌 Chatbot Integration Process

Integration was designed to be simple, lightweight, and compatible with any frontend technology or framework.

### 1️⃣ Embed the Chatbot Widget
It only takes 2 steps:

1. Add the `chatbot_widget.js` file into the frontend directory of the website.
2. Include it in the main HTML page via a `<script>` tag:
```html
   <script src="frontend/chatbot_widget.js"></script>
```
The widget automatically loads the configuration, renders the UI in the bottom-right corner, connects to the backend via API, and handles real-time chat interaction with the user.

### 2️⃣ Generate Configuration & Start Backend

Before the chatbot can respond to user queries, it needs to be configured and served via API:

#### ⚙️ Generate chatbot configuration

Use the `chatbot_setup_wizard.exe` tool to select input files (CSVs, PDFs) and generate a `chatbot_prompt_config.json` file with the appropriate settings.

#### 🚀 Start the chatbot backend server

Run the FastAPI app using:

```bash
py run.py
```

Once running, the chatbot will respond to all user questions sent from the widget embedded in the frontend.

---
