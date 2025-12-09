namespace Arte
{
    partial class Artisti
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
            dataGridView_Artisti = new DataGridView();
            ((System.ComponentModel.ISupportInitialize)dataGridView_Artisti).BeginInit();
            SuspendLayout();
            // 
            // dataGridView_Artisti
            // 
            dataGridView_Artisti.BackgroundColor = SystemColors.ActiveCaption;
            dataGridView_Artisti.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dataGridView_Artisti.Location = new Point(54, 46);
            dataGridView_Artisti.Name = "dataGridView_Artisti";
            dataGridView_Artisti.Size = new Size(678, 320);
            dataGridView_Artisti.TabIndex = 0;
            dataGridView_Artisti.CellContentClick += dataGridView_Artisti_CellContentClick;
            // 
            // Artisti
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            BackColor = Color.FromArgb(192, 255, 255);
            ClientSize = new Size(800, 450);
            Controls.Add(dataGridView_Artisti);
            Name = "Artisti";
            Text = "Form1";
            Load += Artisti_Load;
            ((System.ComponentModel.ISupportInitialize)dataGridView_Artisti).EndInit();
            ResumeLayout(false);
        }

        #endregion

        private DataGridView dataGridView_Artisti;
    }
}
