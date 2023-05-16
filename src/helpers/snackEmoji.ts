export function snackEmoji(name: string) {
    switch (name.toLowerCase()) {
      case 'burger':
        return '🍔'
      case 'pizza':
        return '🍕'
      case 'bebida':
        return '🥤'
      case 'sobremesa':
        return '🍨'
      default:
        return '🧑‍🍳'
    }
  }

// para usar os emojis, basta (windows + . ) e selecionar o emoji do windows.  