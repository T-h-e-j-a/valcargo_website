import re

with open('src/app/App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remove Get Quote button from Navbar
nav_btn = r'<button\s*onClick=\{[^\}]+\}\s*className="text-white font-bold uppercase tracking-widest text-xs px-5 py-2\.5 rounded-lg transition-all duration-200 hover:scale-105"\s*style=\{\{\s*backgroundColor: ORANGE\s*\}\}\s*>\s*Get Quote\s*<\/button>'
content = re.sub(nav_btn, '', content, flags=re.DOTALL)

# 2. Modify ContactSection
state_code = r'const \[form, setForm\] = useState\(\{[\s\S]*?\}\);\s*const \[submitted, setSubmitted\] = useState\(false\);\s*const \[loading, setLoading\] = useState\(false\);\s*const handleSubmit = [\s\S]*?1200\);\s*\};\s*const inputClass =[\s\S]*?bg-white";'
content = re.sub(state_code, '', content, flags=re.DOTALL)

content = content.replace('<SectionHeading>REQUEST A QUOTE</SectionHeading>', '<SectionHeading>CONTACT US</SectionHeading>')

content = content.replace('className="grid grid-cols-1 lg:grid-cols-2 gap-14"', 'className="grid grid-cols-1 gap-14 max-w-3xl mx-auto"')

content = content.replace('{"LET\'S TALK LOGISTICS"}', '{"COMPANY DETAILS"}')

desc_regex = r'Our freight experts are ready to design a shipping solution[\s\S]*?within 24 hours\.'
content = re.sub(desc_regex, 'Please reach out to us for enquiries, shipment coordination, and logistics support.', content, flags=re.DOTALL)

form_regex = r'<FadeIn direction="right" delay=\{0\.15\}>[\s\S]*?<\/form>\s*<\/FadeIn>'
content = re.sub(form_regex, '', content, flags=re.DOTALL)

with open('src/app/App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)