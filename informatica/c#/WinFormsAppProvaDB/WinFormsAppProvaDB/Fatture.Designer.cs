namespace WinFormsAppProvaDB
{
    partial class Fatture
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
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
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            dataGridViewFatture = new DataGridView();
            labelSomma = new Label();
            ((System.ComponentModel.ISupportInitialize)dataGridViewFatture).BeginInit();
            SuspendLayout();
            // 
            // dataGridViewFatture
            // 
            dataGridViewFatture.BackgroundColor = SystemColors.ActiveCaption;
            dataGridViewFatture.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dataGridViewFatture.Location = new Point(63, 12);
            dataGridViewFatture.Name = "dataGridViewFatture";
            dataGridViewFatture.RowHeadersWidth = 51;
            dataGridViewFatture.Size = new Size(653, 298);
            dataGridViewFatture.TabIndex = 0;
            // 
            // labelSomma
            // 
            labelSomma.AutoSize = true;
            labelSomma.Location = new Point(352, 366);
            labelSomma.Name = "labelSomma";
            labelSomma.Size = new Size(61, 20);
            labelSomma.TabIndex = 1;
            labelSomma.Text = "somma:";
            // 
            // Fatture
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 450);
            Controls.Add(labelSomma);
            Controls.Add(dataGridViewFatture);
            Name = "Fatture";
            Text = "Fatture";
            Load += Fatture_Load;
            ((System.ComponentModel.ISupportInitialize)dataGridViewFatture).EndInit();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private DataGridView dataGridViewFatture;
        private Label labelSomma;
    }
}