import re

with open('src/app/App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

form_regex = r'<FadeIn direction="right" delay=\{0\.15\}>[\s\S]*?<\/form>\s*\n\s*\}\)\s*\n\s*<\/FadeIn>'
content = re.sub(form_regex, '', content)

with open('src/app/App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)