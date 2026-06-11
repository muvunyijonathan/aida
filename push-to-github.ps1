# push-to-github.ps1
# Placez ce fichier dans le dossier du projet et exécutez-le depuis PowerShell

Set-Location -Path "$PSScriptRoot"

# Initialise le repo si nécessaire
if (-not (Test-Path .git)) {
  git init
}

# Remplace l'origin si déjà défini
git remote remove origin 2>$null
git remote add origin https://github.com/muvunyijonathan/aida.git

# Récupère les refs distants (sécurise la création de branche)
git fetch origin --prune

# Basculer sur main (ou la créer)
try {
  git checkout main
} catch {
  git checkout -b main
}

# Ajouter et committer si des changements
git add .
$changes = git status --porcelain
if ($changes) {
  git commit -m "Mise à jour: menu mobile et couleurs" 
} else {
  Write-Output "Rien à committer."
}

# Pousser
git branch -M main
git push -u origin main

Write-Output "Terminé. Si une authentification est requise, entre tes identifiants GitHub ou configure une clé SSH."