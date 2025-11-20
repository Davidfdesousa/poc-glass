package com.example.app_android

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.app_android.ui.theme.AppandroidTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        setContent {
            AppandroidTheme {
                // Surface é como uma <div> de fundo que ocupa a tela inteira,
                // equivalente a um <body> com background no HTML.
                Surface(
                    modifier = Modifier.fillMaxSize(),         // width: 100%; height: 100vh;
                    color = MaterialTheme.colorScheme.background
                ) {
                    AppScreen()
                }
            }
        }
    }
}

/**
 * Tela principal usando Scaffold.
 *
 * Scaffold é um layout pronto do Material que já tem slots para:
 * - topBar (como um <header>)
 * - bottomBar (como um <footer> fixo)
 * - floatingActionButton, etc.
 *
 * Aqui usamos apenas o bottomBar para simular um <footer>
 * com position: fixed; bottom: 0; width: 100% no CSS.
 */
@OptIn(ExperimentalMaterial3Api::class) // <- opt-in para usar o Scaffold experimental do Material3
@Composable
fun AppScreen() {
    Scaffold(
        // bottomBar = "footer" fixo na parte de baixo da tela
        bottomBar = {
            FooterButtons()
        }
    ) { innerPadding ->
        // Conteúdo principal da tela.
        // No HTML seria algo dentro de <main>.
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
        ) {
            Text(
                text = "Conteúdo da tela aqui",
                modifier = Modifier.padding(16.dp),
                style = MaterialTheme.typography.titleMedium
            )
        }
    }
}

/**
 * Componente do footer com dois botões.
 *
 * Equivalente a:
 *
 * <footer>
 *   <button>Button label</button>
 *   <button>Button label</button>
 * </footer>
 */
@Composable
fun FooterButtons() {
    Column(
        modifier = Modifier
            .fillMaxWidth()         // width: 100%;
            .padding(16.dp)         // padding: 16px;
    ) {
        // Botão laranja "cheio" (primary)
        // Equivalente a um <button> com background-color laranja e color branca.
        Button(
            onClick = { /* TODO: ação do clique */ },
            modifier = Modifier.fillMaxWidth(),   // width: 100%;
            colors = ButtonDefaults.buttonColors(
                containerColor = Color(0xFFFF9800), // background-color: #FF9800;
                contentColor = Color.White          // color: #FFFFFF;
            )
        ) {
            Text(text = "Button label")
        }

        // Espaço entre os botões (margin-top)
        Spacer(modifier = Modifier.height(12.dp))

        // Segundo botão estilo "outlined"
        // Equivalente a um <button> com background transparente e border.
        OutlinedButton(
            onClick = { /* TODO: ação do clique */ },
            modifier = Modifier.fillMaxWidth()
        ) {
            Text(text = "Button label")
        }
    }
}

/**
 * Preview para ver o layout dentro do Android Studio
 * sem precisar rodar o app no emulador.
 */
@Preview(showBackground = true)
@Composable
fun AppScreenPreview() {
    AppandroidTheme {
        AppScreen()
    }
}
