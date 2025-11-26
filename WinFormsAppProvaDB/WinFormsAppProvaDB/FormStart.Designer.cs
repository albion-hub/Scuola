namespace WinFormsAppProvaDB
{
    partial class FormStart
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            dataGridViewClienti = new DataGridView();
            ((System.ComponentModel.ISupportInitialize)dataGridViewClienti).BeginInit();
            SuspendLayout();
            // 
            // dataGridViewClienti
            // 
            dataGridViewClienti.BackgroundColor = Color.FromArgb(255, 255, 128);
            dataGridViewClienti.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dataGridViewClienti.Location = new Point(85, 94);
            dataGridViewClienti.Name = "dataGridViewClienti";
            dataGridViewClienti.RowHeadersWidth = 51;
            dataGridViewClienti.Size = new Size(658, 254);
            dataGridViewClienti.TabIndex = 0;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(dataGridViewClienti);
            Name = "Form1";
            Text = "Form1";
            Load += Form1_Load;
            ((System.ComponentModel.ISupportInitialize)dataGridViewClienti).EndInit();
            ResumeLayout(false);
        }

        #endregion

        private DataGridView dataGridViewClienti;
    }
}
